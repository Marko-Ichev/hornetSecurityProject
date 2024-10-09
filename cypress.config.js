const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    baseUrl : "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.feature",
  },
  chromeWebSecurity: false,
  chromeArgs: ['--incognito'],
  env: {
    encryptedPassword: 'U2FsdGVkX1/Ru0RgEuwF4lQEeJwr3r27lLetlFJ+qq4=',
    secretKey: 'fK9x2Lm7pQ3rZ8vY4wN6bT1cJ5hS0gA'
  }
});