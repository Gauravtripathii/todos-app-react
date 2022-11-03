import "../style/todos.css";

import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Jog around the park",
      isChecked: false,
    },
    {
      id: 1,
      text: "10 minutes meditation",
      isChecked: false,
    },
    {
      id: 2,
      text: "Read for 1 hour",
      isChecked: false,
    },
  ]);

  const handleCheck = (e) => {
    e.target.className = "checked";
  };

  const addTodo = (e) => {
    if (e.key === "Enter") {
      const x = todos;
      x.push({
        id: todos[todos.length - 1].id + 1,
        text: e.target.value,
        isChecked: false,
      });
      setTodos(x);
    }
  };

  return (
    <div className="todos">
      <input type="text" onKeyDown={(event) => addTodo(event)} />
      <ul onClick={(event) => handleCheck(event)} ref={ul}>
        {mapData()}
      </ul>
      <div className="footer">
        <span className="items">5 items left</span>
        <p className="filter">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </p>
        <span className="clear">Clear Compleated</span>
      </div>
    </div>
  );
};

export default Todos;
