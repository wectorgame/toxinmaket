const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { config } = require("process");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [new OptimizeCssAssetPlugin(), new TerserPlugin()];
  }
  return config;
};
const filename= ext => isDev ? `[name].${ext}`:`[name].[hash].${ext}`
module.exports = {
  context: "",
  mode: "development",
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename('js'),
  },
  resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "models"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./main.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCss({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          "css-loader",
          "less-loader",
        ],
      },
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
