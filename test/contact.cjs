const { chromium, expect } = require("@playwright/test");
const assert = require("node:assert/strict");
const origin = process.env.SITE_TEST_URL || "http://127.0.0.1:4000";
(async () => {
  const browser = await chromium.launch({
    ...(process.env.SITE_TEST_BROWSER ? { executablePath: process.env.SITE_TEST_BROWSER } : {}),
    args: ["--no-sandbox"],
  });
  try {
    for (const width of [1440, 390, 320]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, permissions: ["clipboard-read", "clipboard-write"] });
      const page = await context.newPage();
      await page.goto(origin);
      const email = page.getByRole("button", { name: "Email", exact: true });
      await email.click();
      await expect(page.locator(".email-address")).toBeVisible();
      assert.equal(await page.locator(".email-address").getAttribute("href"), "mailto:ranas@mit.edu");
      await page.getByRole("button", { name: "Copy address" }).click();
      await expect(page.getByRole("status")).toHaveText("Email address copied.");
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), "ranas@mit.edu");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.keyboard.press("Escape");
      await expect(page.locator(".email-address")).not.toBeVisible();
      await email.click();
      await page.evaluate(() => {
        navigator.clipboard.writeText = () => Promise.reject(new Error("Clipboard unavailable"));
      });
      await page.getByRole("button", { name: "Copy address" }).click();
      await expect(page.getByRole("status")).toHaveText("Address selected. You can copy it manually.");
      assert.equal(await page.evaluate(() => window.getSelection().toString()), "ranas@mit.edu");
      await page.locator("h1").click();
      await expect(page.locator(".email-address")).not.toBeVisible();
      await context.close();
      console.log(`Email contact passed at ${width}px`);
    }
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(origin);
    await page.getByRole("button", { name: "Email", exact: true }).click();
    await expect(page.locator(".email-address")).toBeVisible();
    await expect(page.getByRole("button", { name: "Copy address" })).not.toBeVisible();
    await context.close();
    console.log("Email address also works without JavaScript");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
