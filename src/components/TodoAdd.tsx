import { Button } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import React, { LegacyRef } from 'react';

interface TodoAddProps {
  placeholder: string;
  leftIcon: any;
  buttonText: string;
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}
export const TodoAdd: React.FC<TodoAddProps> = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bg="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      <Button
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
        onClick={handleAddTodoListItem}
      >
        {buttonText}
      </Button>
    </>
  );
};
