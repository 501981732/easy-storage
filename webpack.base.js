var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path    = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HappyPack = require('happypack');

const paths = {
  app: path.join(__dirname, 'static'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  devtool:'eval-source-map',//配置生成Source Maps, 选择合适的选项
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
//[hash] is replaced by the hash of the compilation.
//[chunkhash] is replaced by the hash of the chunk.
// http://www.cnblogs.com/ihardcoder/p/5623411.html hash的指纹解构方案
    path: __dirname + "/build",//打包后的文件存放的地方
    //filename: "bundle.js",//打包后输出文件的文件名
    filename: 'js/[name].[hash:6].js', //[name]相当于对应entry中的key（若entry是对象）hash解决缓存问题
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },

  module: {//在配置文件里添加json loader
    loaders: [
        {
            test : /\.json$/,
            loader:"json"
        },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //排除范围，这样解析会快  相对有include 
        include: './src ',
        // include: path.resolve(__dirname,'src'),  使用node的path模块
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
      },
      // npm install style-loader css-loader --save-dev
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'//添加对样式表的处理
        // loader： 'style!css?importLoaders=1!postcss' 给css-loader传参数（?importLoaders=1）处理在css中@import的资源
        // loaders: ['style-loader','css-loader','postcss-loader'] 或者这样
      },
      // npm install less-loader --save-dev
      // npm install less --save-dev
      {
        test: /\.less$/,
        loader: 'style!css?postcss!less'// 预编译语言的话处理顺序为： less-postcss-css-style less已经处理@import的问题不需传参
      },
      {
        test:/\.scss$/,
        loader:'happypack/loader?id=scss'
      },
      // 处理html html-loader
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      // 模板引擎 EJS ejs-loader  或jsx等 
      // layer.js 中import tpl from 'xx.tpl'  export default function layer() { return {name:'layer',tpl:tpl}}
      //app.js中 import layer from 'layer.js' 
      // const App = function() {
      // var dom = document.getElementById('app')
      //  var layer = new layer()
      //  dom.innerHTML = layer.tpl({  //传数据
      //   name: '',
      //   arr: []
      //  })
      //} 
      {
        test:/\.tpl$/,
        loader:'ejs-loader'
      },
      {
        // 处理在css中的图片引用（绝对路径）
        // 模板中使用相对路径可用  <img src="${ require('../../xxx.png')}"></img>这种方式
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        query: {
          name: 'static/[name].[hash:5].[ext]'
        }
      },
      {
        // url-loader 类似file-loader可传一个limit参数
        // 当（图片或文件）大于这个值的时候交给file-loader处理
        // 当小于这个值的时候交给file-loader处理转换为base64的编码而不再是url
        // 利弊：url-loader会增加代码冗余，（file-loader）http请求的方式会有缓存便于第二次加载
        // image-webpack-loader 压缩图片loader
　　　　test: /\.(png|jpg)$/,
　　　　//loader: 'url-loader?limit=1&name=static/[name].[hash:5].[ext]'
        loaders: [
          'url-loader?limit=10000&name=static/[name].[hash:5].[ext]'，
          'image-webpack'
        ]
　　　 },
      {
        test: /\.(mp4)$/,
        loader: 'file'
        // loader: 'url-loader'
        // loader: 'url-loader?limit=100000'
        // loader: 'file-loader'
        // loader: 'file-loader?name=videos/[name].[ext]'
      }
    ]
  }, 
  // npm install postcss-loader
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
  
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new HappyPack({
      id: 'scss',
      loaders: ['style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass'],
    })
  ],

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    stats: 'errors-only',
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    host: '0.0.0.0', 
    port: "8866",
    historyApiFallback: true,
    hot :true,
    proxy: {
      '/zsapi/*': {
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/zsapi/': ''
        }
      }
    }
  } 
}