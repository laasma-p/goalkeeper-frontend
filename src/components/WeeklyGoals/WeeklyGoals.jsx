import classes from "./WeeklyGoals.module.css";
import Card from "../UI/Card";

const DUMMY_WEEKLY_GOALS = [
  {
    goalId: "w1",
    goalName: "Weekly Goal Item 1",
  },
  {
    goalId: "w2",
    goalName: "Weekly Goal Item 2",
  },
  {
    goalId: "w3",
    goalName: "Weekly Goal Item 3",
  },
  {
    goalId: "w4",
    goalName: "Weekly Goal Item 4",
  },
  {
    goalId: "w5",
    goalName: "Weekly Goal Item 5",
  },
  {
    goalId: "w6",
    goalName: "Weekly Goal Item 6",
  },
  {
    goalId: "w7",
    goalName: "Weekly Goal Item 7",
  },
  {
    goalId: "w8",
    goalName: "Weekly Goal Item 8",
  },
  {
    goalId: "w9",
    goalName: "Weekly Goal Item 9",
  },
  {
    goalId: "w10",
    goalName: "Weekly Goal Item 10",
  },
  {
    goalId: "w11",
    goalName: "Weekly Goal Item 11",
  },
  {
    goalId: "w12",
    goalName: "Weekly Goal Item 12",
  },
];

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

const WeeklyGoals = () => {
  const date = new Date();
  const weekNumber = getWeekNumber(date);

  return (
    <Card className={classes.card}>
      <h2 className={classes.week}>Week {weekNumber}</h2>
      <ul className={classes["items-list"]}>
        {DUMMY_WEEKLY_GOALS.length === 0 ? (
          <li className={classes["list-item"]}>
            No goals yet. Add some to get started!
          </li>
        ) : (
          DUMMY_WEEKLY_GOALS.map((weeklyGoal) => {
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
