const isObject = require("lodash/isObject");
const isEmpty = require("lodash/isEmpty");
const find = require("lodash/find");
const postcssValuesParser = require("postcss-values-parser");
const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = require("stylelint");

const declarationValueIndex = require("../utils/declarationValueIndex");
const matchesStringOrRegExp = require("../utils/matchesStringOrRegExp");

const ruleName = "plugin/function-arguments-whitelist";
const messages = ruleMessages(ruleName, {
  rejected: (func, args) =>
    `Unexpected arguments "${args}" for function "${func}"`
});

const rule = whitelist => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: whitelist,
      possible: isObject
    });
    if (!validOptions) return;
    root.walkDecls(node => {
      const { value: nodeValue } = node;
      const valuesRoot = postcssValuesParser(nodeValue, {
        loose: true
      }).parse();
      valuesRoot.walk(valuesNode => {
        const { sourceIndex, type, value } = valuesNode;
        if (type !== "func") return;
        const functionWhitelist = find(whitelist, (list, key) =>
          matchesStringOrRegExp(value, key)
        );
        if (isEmpty(functionWhitelist)) return;
        const args = getArguments(valuesNode);
        if (matchesStringOrRegExp(args, functionWhitelist)) return;
        const index = declarationValueIndex(node) + sourceIndex;
        const message = messages.rejected(value, args);
        report({
          index,
          message,
          node,
          result,
          ruleName
        });
      });
    });
  };
};

const getArguments = node => {
  // strip first and last nodes (i.e. the parens)
  node.removeChild(node.first);
  node.removeChild(node.last);
  return node.nodes.toString();
};

module.exports = createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
