const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const webpack = require("@cypress/webpack-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  // Cucumber plugin configuration
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", webpack({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      }
    }
  }));

  // Write allure report
  allureWriter(on, config);
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    video: false,
    specPattern: [
      'cypress/e2e/features/**/*.feature',
    ],
    downloadsFolder: 'cypress/fixtures/downloads',
    "experimentalModuleVariants": true,
    env: {
      dev: {
        api: {
          url: ''
        },
        ui: {
          url: 'https://marsair.recruiting.thoughtworks.net'
        }
      },
      stg: {
        api: {
          url: 'TBD'
        },
        ui: {
          url: 'TBD'
        }
      },
      prod: {
        api: {
          url: 'TBD'
        },
        ui: {
          url: 'TBD'
        }
      },
      testEnv: "dev",
      uploadsFolder: 'cypress/fixtures/uploads',
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "report/allure-results",
    }
  },
});
