# easy-storage
easy to use storage
* 自己的github账号创建仓库，克隆本地
* 自己的npm账号
* webpack整合项目
* 发布到npm上
* [webpack文档](http://webpack.github.io/)
* [webpack中文文档](http://www.css88.com/doc/webpack/)
* [webpack深入与实战](http://www.imooc.com/learn/802)

* [babel之webpack安装](https://babeljs.cn/docs/setup#installation)

* 使用[clean-webpack-plugin](http://www.css88.com/doc/webpack/guides/output-management/)生产环境下每次打包清楚dist文件
* 开发环境使用[source map](http://www.css88.com/doc/webpack/guides/development/)追踪文件错误
* 使用[webpack-dev-server](http://www.css88.com/doc/webpack/guides/development/)构建本地服务配置项为devServer
* 使用webpack的[模块热替换(Hot Module Replacement 或 HMR)](http://www.css88.com/doc/webpack/guides/hot-module-replacement/)完成程序运行时更新各种模块，而无需进行完全刷新
* [Vue Loader](https://github.com/vuejs/vue-loader)：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。

```  
npm install -g vue-cli
vue init webpack-simple hello
cd hello
npm install
npm run dev
```  
