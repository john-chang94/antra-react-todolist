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
      {!todos.length && (
        <p style={{ textAlign: "center" }}>No todos yet</p>
      )}
    </section>
  );
}
