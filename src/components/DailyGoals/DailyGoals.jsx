import classes from "./DailyGoals.module.css";

const DUMMY_DAILY_GOALS = [
  {
    goalId: "d1",
    goalName: "Daily Goal Item 1",
  },
  {
    goalId: "d2",
    goalName: "Daily Goal Item 2",
  },
  {
    goalId: "d3",
    goalName: "Daily Goal Item 3",
  },
  {
    goalId: "d4",
    goalName: "Daily Goal Item 4",
  },
  {
    goalId: "d5",
    goalName: "Daily Goal Item 5",
  },
  {
    goalId: "d6",
    goalName: "Daily Goal Item 6",
  },
];

const DailyGoals = () => {
  const day = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
  });

  return (
    <div className={classes.card}>
      <h2 className={classes.day}>{day}</h2>
      <ul className={classes["items-list"]}>
        {DUMMY_DAILY_GOALS.length === 0 ? (
          <li className={classes["list-item"]}>
            No goals yet. Add some to get started!
          </li>
        ) : (
          DUMMY_DAILY_GOALS.map((dailyGoal) => {
            return (
              <li key={dailyGoal.goalId} className={classes["list-item"]}>
                {dailyGoal.goalName}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default DailyGoals;
