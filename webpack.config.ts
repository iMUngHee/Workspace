import * as path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

/* Plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};

export default config;
