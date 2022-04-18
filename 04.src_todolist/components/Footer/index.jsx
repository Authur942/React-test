// Footer
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 清除全部已完成
  handleClearAll = () => {
    this.props.clearAllTodoDone()
  }

  // 全选勾选框事件回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  render () {
    const { todos } = this.props
    // 使用Array.reduce方法进行统计
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    // 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
