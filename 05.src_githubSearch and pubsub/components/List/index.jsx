import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users: [],
    loading: false,
    isFirst: true,
    err: ''
  }

  componentDidMount () {
    this.token = PubSub.subscribe('subSearch', (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount () {
    // 销毁消息订阅
    PubSub.unsubscribe(this.token)
  }

  render () {
    const { users, Loding, isFirst, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h1>欢迎使用</h1> :
            Loding ? <h1>Loding......</h1> :
              err ? <h1 style={{ color: 'red' }}>{err}</h1> :
                users.map(userItem => {
                  return (
                    <div key={userItem.id} className="card">
                      <a href={userItem.html_url} target="_blank">
                        <img src={userItem.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userItem.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
