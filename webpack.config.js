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
  resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "models"),
      
    },
  },
  optimization:{
    splitChunks:{
      chunks: 'all'
    }
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
      { test: /\.(png|jpg|svg|gif)$/, use: ["file-loader"] },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};
