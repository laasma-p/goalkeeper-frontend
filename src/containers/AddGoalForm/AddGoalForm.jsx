import classes from "./AddGoalForm.module.css";

const AddGoalForm = () => {
  return (
    <div className={classes["add-goal"]}>
      <form className={classes["add-goal-form"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="goal">Goal</label>
          <input type="text" id="goal" name="goal-name" />
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="goals">Select where to add it</label>
          <select name="goals" id="goals">
            <option value="daily">Day goal</option>
            <option value="monthly">Week goal</option>
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
