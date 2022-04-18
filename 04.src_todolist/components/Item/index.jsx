// Item
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false
  }

  // 鼠标移入/移出回调事件
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 更新todo项的状态
  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 删除按钮事件
  handleDelete = (id) => {
    if (window.confirm('确定要删除吗')) {
      this.props.deleteTodo(id)
    }
  }

  render () {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id) }}>删除</button>
      </li >
    )
  }
}
