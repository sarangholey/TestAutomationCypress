const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Global Element timeout
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  specPattern: 'cypress/intigration/examples/*.js'
  },
});
