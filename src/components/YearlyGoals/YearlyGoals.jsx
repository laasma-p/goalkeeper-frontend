import classes from "./YearlyGoals.module.css";
import Card from "../UI/Card";

const YearlyGoals = ({ yearlyGoals }) => {
  const year = new Date().getFullYear();

  return (
    <Card className={classes.card}>
      <h2 className={classes.year}>{year}</h2>
      <ul className={classes["items-list"]}>
        {yearlyGoals.length === 0 ? (
          <li className={classes["list-item"]}>
            No goals yet. Add some to get started!
          </li>
        ) : (
          yearlyGoals
            .slice()
            .reverse()
            .map((yearlyGoal) => {
              return (
                <li key={yearlyGoal.goal_id} className={classes["list-item"]}>
                  {yearlyGoal.goal_name}
                </li>
              );
            })
        )}
      </ul>
    </Card>
  );
};

export default YearlyGoals;
