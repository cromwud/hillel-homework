import React from 'react';
import { useSelector } from 'react-redux';

function TodoFooter() {

  const totalCount = useSelector((state) => state.todos.list.length);

  return (
    <footer className="todo-footer">
      Всего: {totalCount}
    </footer>
  );
}

export default TodoFooter;