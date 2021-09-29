import axios from 'axios';
import { todoDataUrl } from '../constants';
import { ITodo } from '../models';

export const getAllTodosData = async (): Promise<ITodo[]> => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: ITodo): Promise<ITodo> => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: string): Promise<string> => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

export const updateTodoData = async (
  id: string,
  todo: ITodo
): Promise<ITodo> => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
