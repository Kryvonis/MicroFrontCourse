const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin, DefinePlugin } = require("webpack");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      },
      shared: ['faker']
    }),
    // new ProvidePlugin({
    //     process: 'process/browser',
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
]
}
