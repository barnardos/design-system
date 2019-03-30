const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              noquotes: true
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        loader: "file-loader"
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
