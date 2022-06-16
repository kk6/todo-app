import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Text, Flex, IconButton, ListItem } from '@chakra-ui/react';
import React from 'react';
import { ITodo } from '../models';

interface TodoItemProps {
  todo: ITodo;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const label = todo.done ? '未完了リストへ' : '完了リストへ';
  const setColorScheme = todo.done ? 'pink' : 'blue';

  return (
    <ListItem
      borderWidth="1px"
      p="4"
      bg="white"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Text mb="6">{todo.content}</Text>
      <Flex align="center" justify="flex-end">
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>

        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
};
