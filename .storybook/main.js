const path = require('path');
module.exports = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "docsPage": true
  }
}
