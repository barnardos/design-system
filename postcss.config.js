module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      autoprefixer: { grid: "autoplace" },
      features: {
        "focus-within": true,
        "nesting-rules": true,
        "color-mod-function": {
          unresolved: "warn"
        },
        "custom-properties": {
          preserve: false,
          warnings: true
        }
      }
    }),
    require("postcss-browser-reporter"),
    require("postcss-reporter")
  ]
});
