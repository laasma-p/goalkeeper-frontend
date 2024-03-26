import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Welcome to Goalkeeper.</h1>
      <p className="app-info">
        This is an app where you goals can be added for an upcoming week, a
        month or a year to have a organized list of all the activities want to
        be done. Once the respective day, month or year ends, the list is empty
        for you to add new goals!
      </p>
      <p className="app-info">
        If you are new, register to gain access to the app. If you are already
        registered, log in to continue.
      </p>
      <div className="actions">
        <button className="action-button">
          <Link to={`register`} className="button-link">
            Register
          </Link>
        </button>
        <button className="action-button">
          <Link to={`login`} className="button-link">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export default App;
