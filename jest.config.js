/* eslint-disable import/unambiguous */
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
    "^(?!.*\\.module\\.css$).*\\.css$": "<rootDir>/__mocks__/styleMock.js"
  },
  modulePathIgnorePatterns: ["<rootDir>/.cache", "<rootDir>/public"],
  setupFiles: ["<rootDir>tools/jest-setup.js"],
  testMatch: [
    "<rootDir>/tools/**/__tests__/**/*.js",
    "<rootDir>/src/**/__tests__/**/*.js",
    "<rootDir>/src/**/?(*.)test.js"
  ]
};
