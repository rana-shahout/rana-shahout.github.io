#!/usr/bin/env bash
set -euo pipefail
setup_root=/workspace/.cloud-setup
mkdir -p "$setup_root/src"
export PATH="$setup_root/runtime/bin:$setup_root/python/bin:$PATH"
export LD_LIBRARY_PATH="$setup_root/runtime/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
export BUNDLE_PATH="$setup_root/bundle"
export BUNDLE_FROZEN=true
export BUNDLE_JOBS=4
export BUNDLE_RETRY=3
cat > "$setup_root/activate.sh" <<'SH'
export PATH="/workspace/.cloud-setup/runtime/bin:/workspace/.cloud-setup/python/bin:$PATH"
export LD_LIBRARY_PATH="/workspace/.cloud-setup/runtime/lib${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
export BUNDLE_PATH=/workspace/.cloud-setup/bundle
export BUNDLE_FROZEN=true
export BUNDLE_JOBS=4
export BUNDLE_RETRY=3
SH
if ! ruby -v 2>/dev/null | rg -q 'ruby 3\.3\.5 '; then
  curl -fSL https://github.com/yaml/libyaml/releases/download/0.2.5/yaml-0.2.5.tar.gz -o "$setup_root/src/yaml.tar.gz"
  tar -xzf "$setup_root/src/yaml.tar.gz" -C "$setup_root/src"
  (cd "$setup_root/src/yaml-0.2.5" && ./configure --prefix="$setup_root/runtime" && make -j4 && make install)
  curl -fSL https://cache.ruby-lang.org/pub/ruby/3.3/ruby-3.3.5.tar.gz -o "$setup_root/src/ruby.tar.gz"
  tar -xzf "$setup_root/src/ruby.tar.gz" -C "$setup_root/src"
  (cd "$setup_root/src/ruby-3.3.5" && ./configure --prefix="$setup_root/runtime" --with-libyaml-dir="$setup_root/runtime" --disable-install-doc && make -j4 && make install)
fi
if ! gem list -i bundler -v 4.0.6 >/dev/null; then
  curl -fSL https://rubygems.org/downloads/bundler-4.0.6.gem -o "$setup_root/bundler-4.0.6.gem"
  gem install --local "$setup_root/bundler-4.0.6.gem" --no-document
fi
python3 -m venv "$setup_root/python"
"$setup_root/python/bin/pip" install nbconvert
command -v convert >/dev/null
cd /workspace/rana-shahout.github.io
ruby -ryaml -e 'config = YAML.unsafe_load_file("_config.yml"); File.write("/workspace/.cloud-setup/development.yml", {"external_sources" => [], "exclude" => (Array(config["exclude"]) + ["_posts/2020-09-28-twitter.md"]).uniq}.to_yaml)'
bundle _4.0.6_ install --full-index
npm ci --cache /workspace/.cache/npm
