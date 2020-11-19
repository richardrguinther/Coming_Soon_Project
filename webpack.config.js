const path = require("path");

module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: path.resolve(__dirname, "./scripts"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
