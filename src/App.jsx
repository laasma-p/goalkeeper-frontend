import "./App.css";
import AddGoalForm from "./containers/AddGoalForm/AddGoalForm";
import Goals from "./components/Goals/Goals";
import { useState } from "react";

function App() {
  const [dailyGoals, setDailyGoals] = useState([]);
  const [weeklyGoals, setWeeklyGoals] = useState([]);
  const [yearlyGoals, setYearlyGoals] = useState([]);

  return (
    <div className="app">
      <h1 className="app-heading">Welcome to Goalkeeper.</h1>
      <p className="app-info">
        This is an app where you goals can be added for an upcoming week, a
        month or a year to have a organized list of all the activities want to
        be done. Once the respective day, month or year ends, the list is empty
        for you to add new goals!
      </p>
      <AddGoalForm />
      <Goals
        className="goals"
        dailyGoals={dailyGoals}
        weeklyGoals={weeklyGoals}
        yearlyGoals={yearlyGoals}
      />
    </div>
  );
}

export default App;
