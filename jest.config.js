// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [
    "<rootDir>/tests/unit/testsSetup.js",
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',


  // The glob patterns Jest uses to detect test files
  testMatch: [
    "<rootDir>/tests/**/**.spec.js"
  ],
};
