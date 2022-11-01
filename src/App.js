import icon_sun from "./images/icon-sun.svg";
import "./style/app.css";

function App() {
  return (
    <div className="app">
      <header>
        <p>
          <span>TODO</span>
          <span>
            <img src={icon_sun} />
          </span>
        </p>
      </header>
    </div>
  );
}

export default App;
