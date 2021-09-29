import axios from 'axios';
import React, { useEffect, useState } from 'react';

const todoDataUrl = 'http://localhost:3100/todos';

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
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
      <h2>完了TODOリスト</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
