const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#cddcfe',
      'background': '#000714',
      'primary-button': '#125cfd',
      'secondary-button': '#000b23',
      'accent': '#2b6dfd',
    }
  },
  plugins: [],
};
