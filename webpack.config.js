const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const babelConfig = require('./babel.config.json');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|pubilc)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      Component: path.resolve(__dirname, 'src/components/')
    }
  },
  devServer: {
    historyApiFallback: true
  }
};
