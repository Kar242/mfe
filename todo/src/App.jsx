import React from "react";
import ReactDOM from "react-dom";
import { TodoList } from "./components/TodoList";

const App = () => (
  <div className="{{CONTAINER}}">
    <TodoList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
