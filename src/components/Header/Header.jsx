import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to={`/`} className={classes["button-link"]}>
        Log out
      </Link>
    </div>
  );
};

export default Header;
