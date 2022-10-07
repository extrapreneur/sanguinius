const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videos: true,
  reporter: 'mochawesome',
  reporterOptions: {
      "configFile": "reporter-config.json"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
