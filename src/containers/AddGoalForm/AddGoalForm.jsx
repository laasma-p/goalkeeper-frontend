import { useState } from "react";
import classes from "./AddGoalForm.module.css";

const AddGoalForm = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [chosenAddToGoals, setChosenAddToGoals] = useState("daily");

  const enteredGoalChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const chosenAddToGoalsChangeHandler = (event) => {
    setChosenAddToGoals(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onAddGoal(enteredGoal, chosenAddToGoals);

    setEnteredGoal("");
    setChosenAddToGoals("daily");
  };

  return (
    <div className={classes["add-goal"]}>
      <form className={classes["add-goal-form"]} onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            id="goal"
            name="goal-name"
            onChange={enteredGoalChangeHandler}
            value={enteredGoal}
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

        <button type="submit" className={classes["add-goal-button"]}>
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoalForm;
