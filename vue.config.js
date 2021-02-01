const webpack = require("webpack");
const configureAPI = require("./src/server/configure");

module.exports = {
  devServer: {
    before: configureAPI,
    port: 3000,
    historyApiFallback: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
