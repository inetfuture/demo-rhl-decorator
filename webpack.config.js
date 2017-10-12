const path = require('path');

const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './index.js',
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.(css|less)$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.(html)$/,
      use: ['raw-loader'],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        IS_DEVELOPMENT: JSON.stringify(IS_DEVELOPMENT),
      },
    }),
    // new ExtractTextPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
      path: path.join(__dirname, './dist'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        // 这两个只用于内嵌或行内的代码，不对外链文件起作用
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: __dirname,
    publicPath: '/',
    hot: true,
    inline: true,
    overlay: true,
    historyApiFallback: true,
  },
};
