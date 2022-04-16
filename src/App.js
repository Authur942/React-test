import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'
import './App.css';

export default class App extends Component {

  state = {
    todos: [
      { id: '01', name: '吃饭', done: false },
      { id: '02', name: '睡觉', done: true },
      { id: '03', name: '打代码', done: false }
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodos })
  }
  clearAll = () => {
    if (this.state.todos.length === 0) {
      return
    }
    const clearTodos = []
    this.setState({ todos: clearTodos })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return todoObj = { ...todoObj, done: done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }
  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} />
          <Footer todos={todos} clearAll={this.clearAll} />
        </div>
      </div>
    )
  }
}
