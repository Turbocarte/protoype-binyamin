const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpack = require("terser-webpack-plugin")

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpack({
        parallel: true
      }),
      new CssMinimizerPlugin({
        parallel: true
      })
    ]
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.jpg$/,
        use: [{ loader: "url-loader" }]
      },
      {
        // Loads CSS into a file when you import it via Javascript
        // Rules are set in MiniCssExtractPlugin
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin()
  ]
}