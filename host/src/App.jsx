import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoList  from "todo/TodoList";

const App = () => (
  <div className="container">
    <TodoList/>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
