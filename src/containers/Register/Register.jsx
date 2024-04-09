import classes from "./Register.module.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        enteredEmail,
        enteredPassword,
      });

      setIsRegistered(true);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes["register-heading"]}>Register</h1>
      <div className={classes["form-container"]}>
        {isRegistered && (
          <p className={classes["success-message"]}>
            You have been successfully registered.
          </p>
        )}
        <form className={classes["register-form"]} onSubmit={handleSubmit}>
          <label htmlFor="email" className={classes["form-label"]}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={classes.input}
            onChange={enteredEmailChangeHandler}
            value={enteredEmail}
            required
          />
          <label htmlFor="password" className={classes["form-label"]}>
            Password
          </label>
          <input
            id="password"
            type="password"
            className={classes.input}
            onChange={enteredPasswordChangeHandler}
            value={enteredPassword}
            required
          />
          <button type="submit" className={classes["register-button"]}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
