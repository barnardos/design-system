/* eslint-disable import/unambiguous */
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
    "^(?!.*\\.module\\.css$).*\\.css$": "<rootDir>/__mocks__/styleMock.js"
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.js",
    "<rootDir>/src/**/?(*.)test.js"
  ]
};
