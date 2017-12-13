  var path = require('path');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
   module: {
     rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //排除范围，这样解析会快  相对有include 
        include: '/src ',
        // include: path.resolve(__dirname,'src'),  使用node的path模块
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
      }
    ]
   },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'I am title'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        //告诉开发服务器(dev server)在哪里查找文件
        // contentBase: './',
        // host: '0.0.0.0', 
        port: "8866",
        historyApiFallback: true,
        hot :true,
        // proxy: {
        //   '/zsapi/*': {
        //     target: 'https://api.douban.com',
        //     changeOrigin: true,
        //     pathRewrite: {
        //       '^/zsapi/': ''
        //         }
        //     }
        // }
    }
  };