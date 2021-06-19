
import React from 'react';
import './App.css';
import Todo from './Todo.js'
import todosData from './todosData';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id) {
    this.setState((prev) => {
      const updatedTodo = prev.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodo
      }
    })
    console.log("changed", id)
  }
  render() {
    const todoItems = this.state.todos.map(item =>
      <Todo key={item.key} item={item} clickHandler={this.clickHandler} />
    )
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Todo List</h1>
          <p>
            {todoItems}
          </p>
        </header>
      </div>
    )
  }
}

export default App;
