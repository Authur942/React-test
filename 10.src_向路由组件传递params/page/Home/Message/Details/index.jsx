import React, { Component } from 'react'


const DetailsData = [
  { id: '01', name: '你好世界' },
  { id: '02', name: '你好小红' },
  { id: '03', name: '你好React' }
]

export default class Details extends Component {

  render () {
    console.log(this.props)
    const { id, title } = this.props.match.params
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
