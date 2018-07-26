const babelOptions = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
