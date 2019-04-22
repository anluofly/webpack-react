import React from 'react'
import { Link } from 'react-router-dom'
import Routers from '../config/router'

// export default () => <div>this is app 123</div>

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return [
      <div>
        <Link to="/">首页</Link>
        <Link to="/detail">详情</Link>
      </div>,
      <Routers />,
    ]
  }
}
