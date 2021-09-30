import React from 'react';
import { ITodo } from '../models';

interface TodoItemProps {
  todo: ITodo;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
export const TodoItem: React.VFC<TodoItemProps> = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? '未完了リストへ' : '完了リストへ'}
      </button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};
