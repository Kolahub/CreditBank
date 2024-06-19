const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    signup: './scripts/signup.js',
    login: './scripts/login.js',
    resetPwsrd: './scripts/resetPwsrd.js',
    dashboard: './scripts/dashboard.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  watch: true
};
// 
