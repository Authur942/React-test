import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 清除全部已完成
  handleClearAll = () => {
    this.props.clearAll()
  }

  render () {
    const { todos } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
