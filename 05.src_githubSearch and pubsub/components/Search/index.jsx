import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户的输入(连续结构赋值并重命名)
    const { keyWordElement: { value: keyWord } } = this
    // 发送网络请求
    // this.props.saveUpdateApps({ Loding: true, isFirst: false })
    PubSub.publish('subSearch', { Loding: true, isFirst: false })
    // 这里可以使用跨域请求是因为服务端开启了cors跨域资源共享
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        // this.props.saveUpdateApps({ Loding: false, users: response.data.items })
        PubSub.publish('subSearch', { Loding: false, users: response.data.items })
      },
      error => {
        // this.props.saveUpdateApps({ Loding: false, err: error.message })
        PubSub.publish('subSearch', { Loding: false, err: error.message })
      }
    )
  }

  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="请输入搜索关键字" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
