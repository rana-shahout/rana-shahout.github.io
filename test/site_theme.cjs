// Verify the public pages stay consistent after production build and CSS purging.
// SITE_TEST_URL selects a running build; SITE_TEST_BROWSER optionally selects Chromium.
const { chromium } = require("@playwright/test");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({
    ...(process.env.SITE_TEST_BROWSER ? { executablePath: process.env.SITE_TEST_BROWSER } : {}),
    args: ["--no-sandbox"],
  });
  try {
    for (const width of [1440, 390]) {
      for (const setting of ["light", "dark", "system"]) {
        const context = await browser.newContext({ viewport: { width, height: 1000 }, colorScheme: "dark" });
        await context.addInitScript((theme) => localStorage.setItem("theme", theme), setting);
        const page = await context.newPage();
        for (const route of ["/", "/research/", "/blog/"]) {
          const response = await page.goto(new URL(route, process.env.SITE_TEST_URL || "http://127.0.0.1:4000").href);
          assert.equal(response.status(), 200);
          await page.evaluate(() => document.fonts.ready);
          const result = await page.evaluate(() => {
            const style = (selector) => getComputedStyle(document.querySelector(selector));
            const text = [...document.querySelectorAll('body > [role="main"] p, body > [role="main"] h1, body > [role="main"] h2')];
            return {
              colors: text.map((element) => ({ text: element.textContent.slice(0, 55), color: getComputedStyle(element).color })),
              background: style("body").backgroundColor,
              navigation: style("#navbar").backgroundColor,
              font: style('body > [role="main"]').fontFamily,
              heading: style("h1").fontFamily,
              overflow: document.documentElement.scrollWidth > innerWidth,
            };
          });
          for (const { text, color } of result.colors) assert.equal(color, "rgb(0, 0, 0)", `${route} (${setting}, ${width}): ${text}`);
          assert.equal(result.background, "rgb(253, 252, 250)");
          assert.equal(result.navigation, result.background);
          assert.match(result.font, /^Inter/);
          assert.match(result.heading, /^Lora/);
          assert.equal(result.overflow, false);
          assert.equal(await page.locator("#light-toggle").count(), 0);
          // Even an old theme attribute must not restore pale text on a light page.
          await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
          assert.equal(
            await page
              .locator('body > [role="main"] p')
              .first()
              .evaluate((element) => getComputedStyle(element).color),
            "rgb(0, 0, 0)"
          );
        }
        await context.close();
        console.log(`Passed: ${width}px, saved theme ${setting}, dark system preference`);
      }
    }
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
