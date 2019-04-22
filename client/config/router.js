import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'

export default () => [
  // <Redirect from="/" to="/list" /> // 不推荐使用
  <Route path="/" render={() => <Redirect to="/list" />} exact />,
  <Route path="/list" component={TopicList} exact />,
  <Route path="/detail" component={TopicDetail} />,
]
