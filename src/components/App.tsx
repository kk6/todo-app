import axios from 'axios';
import React, { useEffect, useState } from 'react';

const todoDataUrl = 'http://localhost:3100/todos';

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
}
const TodoItem: React.VFC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
      <button>削除</button>
    </li>
  );
};

interface TodoListProps {
  todoList: ITodo[];
}
const TodoList: React.VFC<TodoListProps> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

interface ITodo {
  id: number;
  content: string;
  done: boolean;
}

const App: React.VFC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(todoDataUrl);
      setTodoList(data);
    };
    fetchData();
  }, []);

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
      <textarea />
      <button>+ TODOを追加</button>
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
};

export default App;
