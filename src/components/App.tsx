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

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? '完了' : '未完了'})
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
