import React from 'react';
import { ITodo } from '../models';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
export const TodoList: React.VFC<TodoListProps> = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
        />
      ))}
    </ul>
  );
};
