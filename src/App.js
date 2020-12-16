import React, { Component } from 'react'
import List from './List'
import './App.css';
import Child from './Child'
import Header from './Header'
import store from './store'
import { Provider } from 'react-redux'
import CompleteTodos  from './Completetodos';
import IncompleteTodos from './IncompleteTodos';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header"><h3>Todo List</h3></header>
          <Header />
          <CompleteTodos />
          <IncompleteTodos />
        </div>
      </Provider>

    );
  }
}

export default App;