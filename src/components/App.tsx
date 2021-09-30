import React, { LegacyRef, useRef } from 'react';
import { ITodo } from '../models';
import { useTodo } from '../hooks/useTodo';

interface TodoTitleProps {
  title: string;
  as: string;
}
const TodoTitle: React.VFC<TodoTitleProps> = ({ title, as }) => {
  if (as === 'h1') return <h1>{title}</h1>;
  if (as === 'h2') return <h2>{title}</h2>;
  return <p>{title}</p>;
};

interface TodoItemProps {
  todo: ITodo;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
const TodoItem: React.VFC<TodoItemProps> = ({
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

interface TodoListProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
const TodoList: React.VFC<TodoListProps> = ({
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

interface TodoAddProps {
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}
const TodoAdd: React.VFC<TodoAddProps> = ({
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

  console.log('TODOリスト: ', todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log('未完了TODOリスト: ', inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log('完了TODOリスト: ', completedList);

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
