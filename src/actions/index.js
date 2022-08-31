import axios from "axios";
import { actionTypes } from "./types";

const BASE_URL = "http://localhost:3000";
const TODOS_PATH = "todos";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH].join("/");
      const todos = await axios.get(todosUrl);
      
      dispatch({ type: actionTypes.FETCH_TODOS, payload: todos.data });

      // const todos = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(axios.get(todosUrl))
      //   }, 2000);
      // })
      // todos.then(res => {
      //   dispatch({ type: actionTypes.FETCH_TODOS, payload: res.data });
      // })
      
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTodo = (todo) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH].join("/");
      const data = { title: todo, isCompleted: false };

      await axios.post(todosUrl, data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateTodo = (todo, id) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
      const data = { title: todo, isCompleted: false };

      await axios.put(todosUrl, data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const patchTodo = (isCompleted, id) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
      const data = { isCompleted };

      await axios.patch(todosUrl, data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTodo = (id) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
      await axios.delete(todosUrl, id);
    } catch (err) {
      console.log(err);
    }
  };
};
