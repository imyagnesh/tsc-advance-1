import React, { createContext, PureComponent } from 'react';

export const TodoContext = createContext();

export class TodoProvider extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
  };

  componentDidMount() {
    this.loadTodo('all');
  }

  loadTodo = async filterType => {
    try {
      let url = 'http://localhost:3000/todoList';

      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(url);
      const json = await res.json();

      this.setState({ todoList: json, filterType });
    } catch (error) {}
  };

  addTodo = async (values, actions) => {
    try {
      const res = await fetch(
        'http://localhost:3000/todoList',
        {
          method: 'POST',
          body: JSON.stringify({
            text: values.todoText,
            isDone: false,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const json = await res.json();

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          actions.resetForm();
        }
      );
    } catch (error) {}
  };

  toggleComplete = async item => {
    try {
      const res = await fetch(
        `http://localhost:3000/todoList/${item.id}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            ...item,
            isDone: !item.isDone,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(
          x => x.id === item.id
        );
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  deleteTodo = async id => {
    try {
      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(
          item => item.id === id
        );
        return {
          todoList: [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  render() {
    const { children } = this.props;
    const { todoList, filterType } = this.state;
    return (
      <TodoContext.Provider
        value={{
          todoList,
          filterType,
          addTodo: this.addTodo,
          toggleComplete: this.toggleComplete,
          deleteTodo: this.deleteTodo,
          loadTodo: this.loadTodo,
        }}>
        {children}
      </TodoContext.Provider>
    );
  }
}
