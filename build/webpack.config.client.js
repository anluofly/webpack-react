const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx'] // 配置引入不需要写后缀名称
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
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

// yarn add webpack-dev-server -D
// yarn add cross-env -D 解决window问题 package.json配置问题
// localhost:8888/filename
if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/', // 配置访问静态文件的路径
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://localhost:3333' // 客户端代理服务器端
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
