const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { config } = require("process");
const polyfill = require("@babel/polyfill");
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
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const cssLoader = (extra) => {
  const load = [
    {
      loader: MiniCss.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    "css-loader",
    "sass-loader",
    "less-loader",
  ];
  if (extra) load.push(extra);
  return load;
};
const babelOptions = (preset) => {
  const addpreset = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    addpreset.presets.push(preset);
  }
  return addpreset;
};
const jsLoader = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];
  if (isDev) {
    loaders.push("eslint-loader");
  }
  return loaders;
};
const plugins = () => {
  const base = [
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
      filename: filename("css"),
    }),
  ];
  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }
  return base;
};
module.exports = {
  context: "",
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.jsx"],
    analytics: "./analytics.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename("js"),
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
  devtool: isDev ? "source-map" : "",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader(),
      },
      {
        test: /\.less$/,
        use: cssLoader("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoader("sass-loader"),
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
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoader(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript"),
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
    ],
  },
};
