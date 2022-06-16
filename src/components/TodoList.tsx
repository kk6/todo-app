import { HeadingProps, List } from '@chakra-ui/react';
import React from 'react';
import { ITodo } from '../models';
import { TodoItem } from './TodoItem';
import { TodoTitle } from './TodoTitle';

interface TodoListProps extends HeadingProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
export const TodoList: React.FC<TodoListProps> = ({
  title,
  as,
  fontSize,
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};
