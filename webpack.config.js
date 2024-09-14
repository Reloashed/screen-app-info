const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',   // Entry point for React
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',                  // Bundled JS file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,              // Regex to match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',         // Use Babel loader for JSX/ES6
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // Add this rule to handle CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],          // File extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',       // Template HTML for Webpack build
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Serve from "dist"
    compress: true,
    port: 3000,                               // Webpack dev server port
  },
};
