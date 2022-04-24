import React, { Component } from 'react'
// 最新版本不是用querystring
import qs from 'qs'


const DetailsData = [
  { id: '01', name: '你好世界' },
  { id: '02', name: '你好小红' },
  { id: '03', name: '你好React' }
]

export default class Details extends Component {

  render () {
    console.log(this.props)
    // 获取传递过来的params参数
    // const { id, title } = this.props.match.params

    // 获取传递过来的Search参数
    const { id, title } = qs.parse(this.props.location.search.slice(1))
    const findResult = DetailsData.find(item => {
      return item.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>name:{findResult.name}</li>
        </ul>
      </div>
    )
  }
}
