import React, { useState } from "react";

export default function Form({ handleAddTodo, handleClearTodos }) {
  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(todo);

    setTodo("");
  };

  const onClear = () => {
    handleClearTodos();
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
      <button className="button__submit" onClick={onClear}>
        clear
      </button>
    </section>
  );
}
