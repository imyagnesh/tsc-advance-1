import React, { PureComponent } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

class Todo extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center bg-slate-100 h-screen">
        <h1>Todo Application</h1>
        <TodoForm />
        <TodoList />
        <TodoFilter />
      </div>
    );
  }
}

export default Todo;
