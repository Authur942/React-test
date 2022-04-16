import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render () {
    const { todos, updateTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
          })
        }
        <li style={{ display: todos.length === 0 ? 'block' : 'none', color: 'gray' }}>暂时没有任务</li>
      </ul>
    )
  }
}
