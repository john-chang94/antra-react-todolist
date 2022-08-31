import React, { useEffect } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import * as actions from "../actions";

function TodoList({
  todos,
  updateTodo,
  patchTodo,
  deleteTodo,
  getTodos
}) {

  useEffect(() => {
    getTodos();
  }, [])
  
  if (!todos) return <p>Loading...</p>
  
  return (
    <section className="todos flex flex-col">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          patchTodo={patchTodo}
          deleteTodo={deleteTodo}
          getTodos={getTodos}
        />
      ))}
      {!todos.length && (
        <p style={{ textAlign: "center" }}>No todos yet</p>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

export default connect(mapStateToProps, actions)(TodoList);
