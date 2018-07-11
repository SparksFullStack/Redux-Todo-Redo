import React, { Component } from 'react';
import './App.css';

import TodoList from "./containers/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo Header</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
