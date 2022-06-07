import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoFilter from './todoFilter';
import { TodoContext, TodoProvider } from './context/todo';

test('should render todo filter component', () => {
  const { container } = render(
    <TodoProvider>
      <TodoFilter />
    </TodoProvider>
  );
  expect(container.firstChild).not.toBeNull();
});

test('should have 3 buttons', () => {
  const { queryAllByRole } = render(
    <TodoProvider>
      <TodoFilter />
    </TodoProvider>
  );

  const btns = queryAllByRole('button');
  expect(btns.length).toBe(3);
  expect(btns[0].innerHTML).toBe('All');
  expect(btns[1].innerHTML).toBe('Pending');
  expect(btns[2].innerHTML).toBe('Completed');
});

test('should click all button', () => {
  const loadTodo = jest.fn();
  const { queryByTestId } = render(
    <TodoContext.Provider
      value={{
        loadTodo,
      }}>
      <TodoFilter />
    </TodoContext.Provider>
  );

  const btnAll = queryByTestId('btnAll');
  fireEvent.click(btnAll);
  expect(loadTodo).toBeCalledWith('all');
});

test('should click pending button', () => {
  const loadTodo = jest.fn();
  const { queryByTestId } = render(
    <TodoContext.Provider
      value={{
        loadTodo,
      }}>
      <TodoFilter />
    </TodoContext.Provider>
  );

  const btnAll = queryByTestId('btnPending');
  fireEvent.click(btnAll);
  expect(loadTodo).toBeCalledWith('pending');
});

test('should click completed button', () => {
  const loadTodo = jest.fn();
  const { queryByTestId } = render(
    <TodoContext.Provider
      value={{
        loadTodo,
      }}>
      <TodoFilter />
    </TodoContext.Provider>
  );

  const btnAll = queryByTestId('btnCompleted');
  fireEvent.click(btnAll);
  expect(loadTodo).toBeCalledWith('completed');
});
