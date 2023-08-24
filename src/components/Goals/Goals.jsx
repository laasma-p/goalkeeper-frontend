import DailyGoals from "../DailyGoals/DailyGoals";
import WeeklyGoals from "../WeeklyGoals/WeeklyGoals";
import YearlyGoals from "../YearlyGoals/YearlyGoals";

const Goals = ({ className, dailyGoals, weeklyGoals, yearlyGoals }) => {
  const classes = `${className}`;

  return (
    <div className={classes}>
      <DailyGoals dailyGoals={dailyGoals} />
      <WeeklyGoals weeklyGoals={weeklyGoals} />
      <YearlyGoals yearlyGoals={yearlyGoals} />
    </div>
  );
};

export default Goals;
