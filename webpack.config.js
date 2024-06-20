const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: './scripts/index.js',
    signup: './scripts/signup.js',
    login: './scripts/login.js',
    resetPwsrd: './scripts/resetPwsrd.js',
    dashboard: './scripts/dashboard.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: ''
            }
          },
        ],
      },
    ],
  },
  watch: true,
};
