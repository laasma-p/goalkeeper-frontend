import { useState } from "react";
import classes from "./AddGoalForm.module.css";
import axios from "axios";

const AddGoalForm = ({ fetchUpdatedGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [chosenAddToGoals, setChosenAddToGoals] = useState("daily");
  const [isGoalAdded, setIsGoalAdded] = useState(false);
  const [showGoalMessage, setShowGoalMessage] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const enteredGoalChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
    setShowGoalMessage(false);
  };

  const inputBlurHandler = () => {
    if (enteredGoal.trim() === "" && inputClicked) {
      setShowGoalMessage(true);
    }
  };

  const inputFocusHandler = () => {
    setShowGoalMessage(inputClicked && enteredGoal.trim() === "");
    setInputClicked(true);
  };

  const chosenAddToGoalsChangeHandler = (event) => {
    setChosenAddToGoals(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredGoal.trim() === "") {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post("http://localhost:3000/add-a-goal", {
        goalName: enteredGoal,
        category: chosenAddToGoals,
        user_token: token,
      });

      setEnteredGoal("");
      setChosenAddToGoals("daily");
      setIsGoalAdded(true);

      setTimeout(() => {
        setIsGoalAdded(false);
      }, 3000);

      fetchUpdatedGoals();
    } catch (error) {}
  };

  const isAddButtonDisabled = enteredGoal.trim() === "";

  return (
    <div className={classes["add-goal"]}>
      {isGoalAdded && (
        <p className={classes["success-message"]}>
          Goal added successfully! Add another one?
        </p>
      )}
      {showGoalMessage && (
        <p className={classes["error-message"]}>Please enter a goal.</p>
      )}
      <form className={classes["add-goal-form"]} onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            id="goal"
            name="goal-name"
            onChange={enteredGoalChangeHandler}
            value={enteredGoal}
            onBlur={inputBlurHandler}
            onFocus={inputFocusHandler}
          />
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="goals">Select where to add it</label>
          <select
            name="goals"
            id="goals"
            onChange={chosenAddToGoalsChangeHandler}
            value={chosenAddToGoals}
          >
            <option value="daily">Day goal</option>
            <option value="weekly">Week goal</option>
            <option value="yearly">Year goal</option>
          </select>
        </div>

        <button
          type="submit"
          className={classes["add-goal-button"]}
          disabled={isAddButtonDisabled}
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoalForm;
