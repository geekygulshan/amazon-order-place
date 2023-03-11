const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://amazon.in'
  },
  defaultCommandTimeout: 15000,
  video: false
});
