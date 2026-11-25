const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const inputCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }
body {
  color: #1c2e24;
  background: #FAF7F2;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
svg { display: inline-block; vertical-align: middle; max-width: 100%; }
html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #f1ede4; }
::-webkit-scrollbar-thumb { background: #c2baaa; border-radius: 4px; }
.product-card { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.product-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(20, 61, 44, 0.08); }
`;

postcss([tailwindcss, autoprefixer])
  .process(inputCss, { from: undefined })
  .then((res) => {
    fs.writeFileSync('src/app/globals.css', res.css, 'utf8');
    console.log('Successfully pre-compiled static globals.css! Length:', res.css.length);
  })
  .catch((err) => {
    console.error('Build CSS error:', err);
  });
