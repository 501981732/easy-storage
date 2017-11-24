var merge = require('webpack-merge')
var baseWeboacConfig = require('./webpack.base.js')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpackConfig = merge(baseWeboacConfig,{
    // plugins: [
    //     new CleanWebpackPlugin(['dist'])
    // ]
})
// 生产环境下每次打包删除dist文件
webpackConfig.plugins.push(new CleanWebpackPlugin(['dist']))