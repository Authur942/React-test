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
                  {/* <Link to={`/home/message/Details/${item.id}/${item.title}`}>{item.title}</Link> */}

                  {/* 向路由组件传递Search参数 */}
                  <Link to={`/home/message/Details/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        {/* 传递几个参数需要在路由组件声明接收 */}
        {/* <Route replace path={`/home/message/Details/:id/:title`} component={Details}></Route> */}

        {/* 传递过来的Search不需要接收声明 */}
        <Route replace path={`/home/message/Details`} component={Details}></Route>
      </div>
    )
  }
}
