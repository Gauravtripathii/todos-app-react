import "../style/todos.css";

import { useState, useEffect } from "react";

const Todos = (props) => {

  const handleCheck = (e) => {
    e.target.className = "checked";
    const text = e.target.innerText;

    for (let i = 0; i < props.todos.length; i++) {
      if (props.todos[i].text == text) {
        props.todos[i].isChecked = true;
        console.log(props.todos[i].id);
      }
    }
  };

  const clickHandler = (event) => {
    props.addTodo(event);
  };

  return (
    <div className="todos">
      <input type="text" onKeyDown={(event) => clickHandler(event)} />
      <ul onClick={(event) => handleCheck(event)}>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div className="footer">
        <span className="items filter-btn">{props.todos.length} items</span>
        <p className="filter">
          <span className="filter-btn">All</span>
          <span className="filter-btn">Active</span>
          <span className="filter-btn">Completed</span>
        </p>
        <span className="clear filter-btn">Clear Compleated</span>
      </div>
    </div>
  );
};

export default Todos;
