import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Switch, Route, Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/message'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/News'>Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            {/* 嵌套的路由要带上父路由的path值 */}
            {/* 路由的匹配是按照注册的路由顺序执行的 */}
            <Route path='/home/message' component={Message}></Route>
            <Route path='/home/news' component={News}></Route>
            <Redirect to='/home/message'></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
