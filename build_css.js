const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const fs = require('fs');
const path = require('path');

async function buildCss() {
  console.log('Compiling Tailwind CSS...');
  const inputCss = `
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0f172a;
}
`;

  const result = await postcss([tailwind()]).process(inputCss, {
    from: path.join(__dirname, 'src/app/globals.css')
  });

  fs.writeFileSync(path.join(__dirname, 'src/app/globals.css'), result.css, 'utf8');
  console.log(`Successfully compiled Tailwind CSS to src/app/globals.css (${result.css.length} bytes)`);
}

buildCss().catch(console.error);

