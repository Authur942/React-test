import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Details from './Details/index'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }
  render () {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/Details/${item.id}/${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path={`/home/message/Details/:id/:title`} component={Details}></Route>
      </div>
    )
  }
}
