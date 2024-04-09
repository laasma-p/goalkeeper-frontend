import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const navigate = useNavigate();

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        enteredEmail,
        enteredPassword,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/goals");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className={classes.login}>
      <h1 className={classes["login-heading"]}>Login</h1>
      <div className={classes["form-container"]}>
        <form className={classes["login-form"]} onSubmit={loginHandler}>
          <label htmlFor="email" className={classes["form-label"]}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={classes.input}
            value={enteredEmail}
            onChange={enteredEmailChangeHandler}
          />
          <label htmlFor="password" className={classes["form-label"]}>
            Password
          </label>
          <input
            id="password"
            type="password"
            className={classes.input}
            value={enteredPassword}
            onChange={enteredPasswordChangeHandler}
          />
          <button type="submit" className={classes["login-button"]}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
