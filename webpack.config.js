var path = require('path')
var webpack = require('webpack')
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
        new HtmlWebpackPlugin({
            title: 'I am Title'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // 告诉开发服务器(dev server)，在哪里查找文件
        // contentBase: './',
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