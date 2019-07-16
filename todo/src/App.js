import React from 'react';

import "./index"

import './App.css';
import TodoItem from "./components/TodoItem"
function App() {
    return (
      <div className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    );
    }

export default App;
