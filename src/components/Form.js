import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function Form({ todos, addTodo, deleteTodo, getTodos }) {
  const [todo, setTodo] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await addTodo(todo);
    getTodos();
    // clear text input
    setTodo("");
  };

  const handleClearTodos = async () => {
    for (let todo of todos) {
      if (todo.completed) {
        await deleteTodo(todo.id);
      }
    }
  };

  return (
    <section className="input__wrapper flex justify-center">
      <form className="flex" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="text-input"
            value={todo}
            onChange={({ target }) => setTodo(target.value)}
          />
        </div>
        <div>
          <input type="submit" className="button__submit" value="submit" />
        </div>
      </form>
      <button className="button__submit" onClick={handleClearTodos}>
        clear
      </button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

export default connect(mapStateToProps, actions)(Form);
