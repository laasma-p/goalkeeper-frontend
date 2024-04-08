import classes from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={classes.app}>
      <h1 className={classes["app-heading"]}>Welcome to Goalkeeper.</h1>
      <p className={classes["app-info"]}>
        This is an app where you goals can be added for an upcoming week, a
        month or a year to have a organized list of all the activities want to
        be done. Once the respective day, month or year ends, the list is empty
        for you to add new goals!
      </p>
      <p className={classes["app-info"]}>
        If you are new, register to gain access to the app. If you are already
        registered, log in to continue.
      </p>
      <div className={classes.actions}>
        <button className={classes["action-button"]}>
          <Link to={`register`} className={classes["button-link"]}>
            Register
          </Link>
        </button>
        <button className={classes["action-button"]}>
          <Link to={`login`} className={classes["button-link"]}>
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
