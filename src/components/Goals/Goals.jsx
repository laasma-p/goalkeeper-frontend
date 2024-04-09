import DailyGoals from "../DailyGoals/DailyGoals";
import WeeklyGoals from "../WeeklyGoals/WeeklyGoals";
import YearlyGoals from "../YearlyGoals/YearlyGoals";
import AddGoalForm from "../../containers/AddGoalForm/AddGoalForm";
import Header from "../Header/Header";
import classes from "./Goals.module.css";

const Goals = () => {
  const [dailyGoals, setDailyGoals] = useState([]);
  const [weeklyGoals, setWeeklyGoals] = useState([]);
  const [yearlyGoals, setYearlyGoals] = useState([]);
  return (
    <>
      <Header />
      <div className={classes.goals}>
        <AddGoalForm />
        <DailyGoals dailyGoals={dailyGoals} />
        <WeeklyGoals weeklyGoals={weeklyGoals} />
        <YearlyGoals yearlyGoals={yearlyGoals} />
      </div>
    </>
  );
};

export default Goals;
