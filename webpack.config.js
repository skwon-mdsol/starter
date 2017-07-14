const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('bundle.css')

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ]
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        loader: extractCSS.extract(['css-loader','sass-loader'])
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000}
        }]
      }
    ]
  },
  plugins: [
    extractCSS,
    new CopyWebpackPlugin([
      {from: 'index.html', to: '.'}
    ])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  devtool: 'inline-source-map'
}

module.exports = config;
