import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  handleUpdateTodo,
  handlePatchTodo,
  handleDeleteTodo,
}) {
  return (
    <section className="todos flex flex-col">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handlePatchTodo={handlePatchTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </section>
  );
}
