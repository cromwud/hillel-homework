const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/js/index.js',
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, 
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    module: {
      rules: [
        
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader, 
            'css-loader',                
            'sass-loader',               
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction, 
      minimizer: [
        new TerserPlugin(),  
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.css', 
      }),
    ],
    
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      hot: true,
    },
  };
};