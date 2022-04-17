// List
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render () {
    // 注意这里deleteTodo不可命名为delete，因为delete是关键字会被解析
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
        <li style={{ display: todos.length === 0 ? 'block' : 'none', color: 'gray' }}>暂时没有任务</li>
      </ul>
    )
  }
}
