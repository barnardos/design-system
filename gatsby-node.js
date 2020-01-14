exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: "raw-loader"
        }
      ]
    }
  });
};
