const rule = require("..");
const { messages, ruleName } = rule;

testRule(rule, {
  ruleName,
  config: [["#000", "#fff"]],

  accept: [
    {
      code: "a { color: #000; }"
    },
    {
      code: "a { color: #fff; }"
    },
    {
      code: "a { color: rgb(22, 22, 22); }"
    },
    {
      code: "a { background: #000; }"
    },
    {
      code: "a { background: url(x.svg#aaa); }"
    },
    {
      code: 'a { content: "#aaa"); }'
    },
    {
      code: "a { color: var(--#aaa); }"
    },
    {
      code: "/* #aaa */"
    }
  ],

  reject: [
    {
      code: "a { color: #aaa }",
      message: messages.rejected("#aaa"),
      line: 1,
      column: 12
    },
    {
      code: "a { background: #fff,\n#aaa }",
      message: messages.rejected("#aaa"),
      line: 2,
      column: 1
    },
    {
      code: "a { box-shadow: color-mod(#ffffff shade(10%)) }",
      message: messages.rejected("#ffffff"),
      line: 1,
      column: 27
    }
  ]
});
