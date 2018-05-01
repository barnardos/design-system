const rule = require("..");
const { messages, ruleName } = rule;

testRule(rule, {
  ruleName,
  config: [{ shade: ["10%", "20%"], tint: ["10%", "20%"] }],

  accept: [
    {
      code: "a { color: color-mod(#000 shade(10%)); }"
    },
    {
      code: "a { color: color-mod(#000 tint(20%)); }"
    },
    {
      code: "a { color: color-mod(#000 alpha(5%)); }"
    },
    {
      code: "a { width: calc(2px * 100); }"
    },
    {
      code: 'a { content: "shade(5%)"); }'
    },
    {
      code: "/* shade(5%)*/"
    }
  ],

  reject: [
    {
      code: "a { color: color-mod(#ffffff shade(5%)) }",
      message: messages.rejected("shade", "5%"),
      line: 1,
      column: 30
    },
    {
      code: "a { color: color-mod(#ffffff\ntint(5%)) }",
      message: messages.rejected("tint", "5%"),
      line: 2,
      column: 1
    }
  ]
});
