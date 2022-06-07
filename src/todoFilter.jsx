import React, { memo } from 'react';
import { TodoContext } from './context/todo';

function TodoFilter() {
  return (
    <TodoContext.Consumer>
      {({ loadTodo }) => (
        <div className="w-full flex">
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => loadTodo('all')}>
            All
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => loadTodo('pending')}>
            Pending
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => loadTodo('completed')}>
            Completed
          </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoFilter);
