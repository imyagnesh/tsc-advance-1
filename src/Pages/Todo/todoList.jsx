import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { TodoContext } from './context/todo';

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todoList }) => (
        <div className="w-full max-w-5xl flex-1 overflow-y-auto">
          {todoList.map(item => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoList);
