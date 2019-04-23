# webpack-react
# webpack+react的学习
# editorconfig
* yarn add eslint -D
* yarn add babel-eslint eslint-config-airbnb eslint-config-standard eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard -D
* yarn add husky -D
* yarn add react-router -S
* yarn add react-router-dom -S
* yarn add babel-plugin-transform-decorators-legacy babel-preset-stage-1 -D
* 解决babel 7.0版本问题 yarn add @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/preset-stage-0 -D
* yarn add mobx mobx-react -S
* yarn add prop-types -S


# 项目目录架构
* views 目录用于存放项目功能模块的页面，需要根据路由配置情况分割子级目录
* config 目录存放一些配置目录，如：第三方类库引用，路由配置等
* store 目录用于存放项目store相关的文件，包括数据获取的封装等
* components 目录用于存放非义务组件，或者在多个义务间都需要用到的功能组件
*

# .babel历史修改问题
```
// "presets": [ // 代表babel支持的语法
//     // ["es2015", { "loose": true }],
//     // "react" // 代表可以编译react  https://segmentfault.com/a/1190000016458913
//     // 以上配置需要安装npm i babel-preset-es2015 babel-preset-es2015-loose babel-preset-react -D 改为 npm i @babel/preset-es2015 @babel/preset-es2015-loose @babel/preset-react
//     "@babel/preset-env",
//     "@babel/preset-react",
//     "stage-1"
// ],
```
