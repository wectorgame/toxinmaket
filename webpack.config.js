const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].webpack.bundle.js",
  },
};
