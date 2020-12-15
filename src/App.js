import React, { Component } from 'react'
import List from './List'
import './App.css';

const todos = [{ id: 1, title: "Buy groceries", completed: true }, { id: 2, title: "Clean the house", completed: false }, { id: 3, title: "Make dinner", completed: false }, { id: 4, title: "Feed kitties", completed: true }]

class App extends Component {

  render() {
    debugger
    return (
      <div className="App">
        <header className="App-header"><h3>Todo List</h3></header>
        <List todos={todos} />
      </div>

    );
  }
}

export default App;