var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry: {
        index: './src/index.js'
    },
    // 出口
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    // 准确地知道错误来自于哪个源文件 在开发环境下应用
    devtool: 'inline-source-map',
    // 加载器
    module: {
        // 配置相关loader
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        // root: '',
        // 自动扩展文件后缀名
        extensions: ['vue','js','json','less'],
        // 别名
        // alias: {}
    },
    plugins: [
        //压缩 html, 自动添加里面生成的静态资源
        // new HtmlWebpackPlugin({ // new一个这个插件的实例，并传入相关的参数
        //     template: 'index.html', //以哪个文件为模板
        //     filename: 'index.html', //文件名字
        //     removeAttributeQuotes: true,  //去除属性引用
        //     // inject: 'head', //引入文件文件放head
        //     inject: false, 
        //     title: 'webpack is good',
        //     date: new Date(),
        //     minify: { //压缩
        //          caseSensitive: false, //是否大小写敏感
        //          removeComments:true, // 去除注释
        //          removeEmptyAttributes:true, // 去除空属性
        //          collapseWhitespace: true //是否去除空格
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // 告诉开发服务器(dev server)，在哪里查找文件
        // contentBase: './',
        // host: '0.0.0.0', 
        // port: "8866",
        // historyApiFallback: true,
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
}