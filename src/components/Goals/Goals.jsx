import DailyGoals from "../DailyGoals/DailyGoals";
import WeeklyGoals from "../WeeklyGoals/WeeklyGoals";
import YearlyGoals from "../YearlyGoals/YearlyGoals";

const Goals = ({ className }) => {
  const classes = `${className}`;

  return (
    <div className={classes}>
      <DailyGoals />
      <WeeklyGoals />
      <YearlyGoals />
    </div>
  );
};

export default Goals;
