/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

