import React, { useRef } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoTitle } from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const App: React.VFC = () => {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current === null) return;
    if (inputEl.current.value === '') return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = '';
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
};

export default App;
