import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  // 采用消息订阅的方式不需要app定义状态
  // state = {
  //   users: [],
  //   loading: false,
  //   isFirst: true,
  //   err: ''
  // }

  // saveUpdateApps = (stateObj) => {
  //   this.setState(stateObj)
  // }

  render () {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}
