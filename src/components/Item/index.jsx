import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false
  }

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

  render () {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={this.handleDelete}>删除</button>
      </li >
    )
  }
}
