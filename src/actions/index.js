import axios from "axios";

const BASE_URL = "http://localhost:3000";
const TODOS_PATH = "todos";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH].join("/");
      const todos = await axios.get(todosUrl);

      dispatch({ type: "FETCH_TODOS", payload: todos.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTodo = (todo) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH].join("/");
      const data = { title: todo, completed: false };

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
      const data = { title: todo, completed: false };

      await axios.put(todosUrl, data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const patchTodo = (completed, id) => {
  return async () => {
    try {
      const todosUrl = [BASE_URL, TODOS_PATH, id].join("/");
      const data = { completed };

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
