const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: "",
  mode: "development",
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./main.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {test: /\.(png|jpg|svg|gif)$/, use:['file-loader']}
      
    ],
  },
};
