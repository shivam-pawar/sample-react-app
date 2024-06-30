const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("production"),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        extractComments: true,
        parallel: true,
        test: /\.(ts|js)x?$/,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
