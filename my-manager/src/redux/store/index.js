/**
 * 引入createStore创建Store
 */

 import { createStore } from 'redux'
 import reducer from './../reducer'
 import { composeWidthDevTools } from 'redux-devtools-extension'

 export default () => createStore(reducer, composeWidthDevTools())
