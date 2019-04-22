const path = require('path')

module.exports = {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    // filename: '[name].[hash].js',
    filename: 'server-entry.js', // 服务器端没有浏览器缓存概念
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        enforce: 'pre', // 代码编译之前，检测
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules') // 不检测的文件
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules') // 配置忽略编译js文件
        ]
      }
    ]
  }
}
