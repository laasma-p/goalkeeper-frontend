import classes from "./DailyGoals.module.css";
import Card from "../UI/Card";

const DailyGoals = ({ dailyGoals }) => {
  const day = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
  });

  return (
    <Card className={classes.card}>
      <h2 className={classes.day}>{day}</h2>
      <ul className={classes["items-list"]}>
        {dailyGoals.length === 0 ? (
          <li className={classes["list-item"]}>
            No goals yet. Add some to get started!
          </li>
        ) : (
          dailyGoals
            .slice()
            .reverse()
            .map((dailyGoal) => {
              return (
                <li key={dailyGoal.goal_id} className={classes["list-item"]}>
                  {dailyGoal.goal_name}
                </li>
              );
            })
        )}
      </ul>
    </Card>
  );
};

export default DailyGoals;
