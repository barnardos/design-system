const rule = require("..");
const { messages, ruleName } = rule;

testRule(rule, {
  ruleName,
  config: [["/^var\\(--slot/", "1rem"]],

  accept: [
    {
      code: "a { font-size: 10px }"
    },
    {
      code: "a { font: var(--slot-1)/1rem sans-serif; }"
    },
    {
      code: "a { font: 300 1rem/1.5rem serif; }"
    }
  ],

  reject: [
    {
      code: "a { font: 10px/1rem sans-serif; }",
      message: messages.rejected("10px"),
      line: 1,
      column: 11
    },
    {
      code: "a { font: bold var(--x)/1 serif; }",
      message: messages.rejected("var(--x)"),
      line: 1,
      column: 11
    }
  ]
});
