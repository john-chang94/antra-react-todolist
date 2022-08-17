import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {
  addTodo,
  deleteTodo,
  getTodos,
  patchTodo,
  updateTodo,
} from "./services";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleAddTodo = async (todo) => {
    await addTodo(todo);
    fetchData();
  };

  const handleUpdateTodo = async (todo, id) => {
    await updateTodo(todo, id);
    fetchData();
  };

  const handlePatchTodo = async (completed, id) => {
    await patchTodo(completed, id);
    fetchData();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchData();
  };

  const handleClearTodos = async () => {
    for (let todo of todos) {
      if (todo.completed) {
        console.log('DELETING', todo.id)
        console.log('TODO', todo)
        await deleteTodo(todo.id);
        console.log('DELETED')
      }
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Form handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos} />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handlePatchTodo={handlePatchTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
