const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "naouu8",
  videos: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      configFile: "reporter-config.json"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
