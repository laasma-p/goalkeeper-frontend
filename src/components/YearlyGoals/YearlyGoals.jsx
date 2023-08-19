import classes from "./YearlyGoals.module.css";

const DUMMY_YEARLY_GOALS = [
  {
    goalId: "y1",
    goalName: "Yearly Goal Item 1",
  },
  {
    goalId: "y2",
    goalName: "Yearly Goal Item 2",
  },
  {
    goalId: "y3",
    goalName: "Yearly Goal Item 3",
  },
];

const YearlyGoals = () => {
  const year = new Date().getFullYear();

  return (
    <div className={classes.card}>
      <h2 className={classes.year}>{year}</h2>
      <ul className={classes["items-list"]}>
        {DUMMY_YEARLY_GOALS.map((yearlyGoal) => {
          return (
            <li key={yearlyGoal.goalId} className={classes["list-item"]}>
              {yearlyGoal.goalName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default YearlyGoals;
