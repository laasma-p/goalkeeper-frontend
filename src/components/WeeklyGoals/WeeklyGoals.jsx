import classes from "./WeeklyGoals.module.css";
import Card from "../UI/Card";

const getWeekNumber = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  const firstMonday = new Date(date.getFullYear(), 0, 1);
  while (firstMonday.getDay() !== 1) {
    firstMonday.setDate(firstMonday.getDate() + 1);
  }

  // Calculate the difference in days between the current date and the first Monday
  const diffInDays = Math.round((date - firstMonday) / (24 * 60 * 60 * 1000));

  // Calculate the week number
  const weekNumber = 1 + Math.floor(diffInDays / 7);

  return weekNumber;
};

const WeeklyGoals = ({ weeklyGoals }) => {
  const date = new Date();
  const weekNumber = getWeekNumber(date);

  return (
    <Card className={classes.card}>
      <h2 className={classes.week}>Week {weekNumber}</h2>
      <ul className={classes["items-list"]}>
        {weeklyGoals.length === 0 ? (
          <li className={classes["list-item"]}>
            No goals yet. Add some to get started!
          </li>
        ) : (
          weeklyGoals.map((weeklyGoal) => {
            return (
              <li key={weeklyGoal.goalId} className={classes["list-item"]}>
                {weeklyGoal.goalName}
              </li>
            );
          })
        )}
      </ul>
    </Card>
  );
};

export default WeeklyGoals;
