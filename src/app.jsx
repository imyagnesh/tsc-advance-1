import React, { Component, createRef } from 'react';

class Todo extends Component {
  state = {
    todoList: [],
  };

  inputRef = createRef();

  addTodo = event => {
    event.preventDefault();
    const todoText = this.inputRef.current;
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: todoText.value,
          },
        ],
      }),
      () => (todoText.value = '')
    );
  };

  render() {
    console.log('render');
    const { todoList } = this.state;

    return (
      <div className="flex flex-col items-center">
        <h1>Todo Application</h1>
        <form className="flex my-4" onSubmit={this.addTodo}>
          <input
            ref={this.inputRef}
            type="text"
            placeholder="Please Enter your todo here..."
          />
          <button
            className="btn rounded-l-none"
            type="submit">
            Add Todo
          </button>
        </form>
        <div className="w-full max-w-5xl">
          {todoList.map((item, index) => (
            <div className="flex m-4 items-center">
              <input type="checkbox" />
              <p className="flex-1 px-4">{item.text}</p>
              <button
                type="button"
                className="btn bg-red-400">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
