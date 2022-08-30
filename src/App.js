import "./App.css";
import React, { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import * as actions from "./actions";

function App({ getTodos }) {

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <Form />
      <TodoList />
    </div>
  );
}

export default connect(null, actions)(App);
