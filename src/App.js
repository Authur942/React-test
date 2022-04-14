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
  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
