import React, { useState } from "react";

export default function Form({ handleAddTodo, handleClearTodos }) {
  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(todo);

    setTodo("");
  };

  return (
    <form className="input__wrapper flex justify-center" onSubmit={onSubmit}>
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
        <button className="button__submit" onClick={handleClearTodos}>clear</button>
      </div>
    </form>
  );
}
