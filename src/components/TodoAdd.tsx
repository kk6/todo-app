import React, { LegacyRef } from 'react';

interface TodoAddProps {
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}
export const TodoAdd: React.VFC<TodoAddProps> = ({
  inputEl,
  handleAddTodoListItem,
}) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  );
};
