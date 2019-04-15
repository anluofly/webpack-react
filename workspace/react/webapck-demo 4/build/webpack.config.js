const path = require('path'); // 绝对路径的书写
// 在浏览器中运行 需要安装 npm i html-webpack-plugin -D
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js', // name指代entry下面项的名字的app，hash对整个项目打包完成之后，有js改变之后，hash值就会改变,  达到是否使用浏览器缓存
        path: path.join(__dirname, '../dist'),
        publicPath: '/public' // 静态资源引用时的路径 /app.hash.js /public/app.hash.js
    },
    module: {
        rules: [
          {
            test: /.jsx$/,
            loader: 'babel-loader' // 安装npm i babel-loader -D需要同时安装 npm i babel-core -D   npm i -D @babel/core
          }
        ]
    },
    plugins: [
        new HTMLPlugin()
    ]
};