import DailyGoals from "../DailyGoals/DailyGoals";
import WeeklyGoals from "../WeeklyGoals/WeeklyGoals";
import YearlyGoals from "../YearlyGoals/YearlyGoals";

const Goals = () => {
  return (
    <div>
      <DailyGoals />
      <WeeklyGoals />
      <YearlyGoals />
    </div>
  );
};

export default Goals;
