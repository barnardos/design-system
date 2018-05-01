const rule = require("..");
const { messages, ruleName } = rule;

testRule(rule, {
  ruleName,
  config: [
    { "/^margin/": 8, font: 4 },
    { ignoreNumbers: ["0.125", "0.25", "0.5"] }
  ],

  accept: [
    {
      code: "a { margin: 1rem; }"
    },
    {
      code: "a { margin-left: 0.5rem; }"
    },
    {
      code: "a { margin: 0.25rem; }"
    },
    {
      code: "a { margin: 0.125rem; }"
    },
    {
      code: "a { margin: 3rem; }"
    },
    {
      code: "a { font: var(--slot-1)/2rem sans-serif; }"
    }
  ],

  reject: [
    {
      code: "a { margin: 1.2rem }",
      message: messages.expected("1.2rem", "8"),
      line: 1,
      column: 13
    },
    {
      code: "a { margin-left: 0.23rem }",
      message: messages.expected("0.23rem", "8"),
      line: 1,
      column: 18
    },
    {
      code: "a { font:\nvar(--slot-1)/1.3rem sans-serif; }",
      message: messages.expected("1.3rem", "4"),
      line: 2,
      column: 15
    }
  ]
});
