const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      openMode: 2,
      runMode: 2
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "viewportWidth": 1366, // Ширина экрана ноутбука
  "viewportHeight": 768 // Высота экрана ноутбука
});
