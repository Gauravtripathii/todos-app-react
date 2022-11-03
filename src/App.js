import icon_sun from "./images/icon-sun.svg";
import icon_moon from "./images/icon-moon.svg";
import "./style/app.css";

import Todos from "./components/Todos";

import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    var docStyle = document.documentElement.style;
    if (isDark) {
      docStyle.setProperty("--font", "white");
      docStyle.setProperty("--header-font", "white");
      docStyle.setProperty("--one", "hsl(235, 21%, 11%)");
      docStyle.setProperty("--two", "hsl(235, 24%, 19%)");
    } else {
      docStyle.setProperty("--font", "black");
      docStyle.setProperty("--header-font", "white");
      docStyle.setProperty("--one", "rgb(236, 236, 236)");
      docStyle.setProperty("--two", "white");
    }
  }, [isDark]);

  // todos

  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "An exampler todo",
      isChecked: false,
    },
  ]);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: todos[todos.length - 1].id + 1,
          text: e.target.value,
          isChecked: false,
        },
      ]);
      console.log(todos);
      e.target.value = "";
    }
  };

  return (
    <div className="app">
      <header
        style={
          isDark
            ? {
                backgroundImage:
                  "url(" + require("./images/bg-desktop-dark.jpg") + ")",
              }
            : {
                backgroundImage:
                  "url(" + require("./images/bg-desktop-light.jpg") + ")",
              }
        }
      >
        <p>
          <span>TODO</span>
          <span onClick={() => setIsDark(isDark ? false : true)}>
            <img src={isDark ? icon_sun : icon_moon} />
          </span>
        </p>
      </header>

      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
