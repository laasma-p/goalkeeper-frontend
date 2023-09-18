import "./App.css";
import AddGoalForm from "./containers/AddGoalForm/AddGoalForm";
import Goals from "./components/Goals/Goals";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dailyGoals, setDailyGoals] = useState([]);
  const [weeklyGoals, setWeeklyGoals] = useState([]);
  const [yearlyGoals, setYearlyGoals] = useState([]);

  const fetchGoals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      const goalsData = response.data;

      const dailyGoalsData = goalsData.filter(
        (goal) => goal.category === "daily"
      );
      const weeklyGoalsData = goalsData.filter(
        (goal) => goal.category === "weekly"
      );
      const yearlyGoalsData = goalsData.filter(
        (goal) => goal.category === "yearly"
      );

      setDailyGoals(dailyGoalsData);
      setWeeklyGoals(weeklyGoalsData);
      setYearlyGoals(yearlyGoalsData);
    } catch (error) {
      console.error("Could not fetch goals:", error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const addDailyGoalHandler = (dailyGoal) => {
    setDailyGoals((prevDailyGoals) => {
      return [dailyGoal, ...prevDailyGoals];
    });
  };

  const addWeeklyGoalHandler = (weeklyGoal) => {
    setWeeklyGoals((prevWeeklyGoals) => {
      return [weeklyGoal, ...prevWeeklyGoals];
    });
  };

  const addYearlyGoalHandler = (yearlyGoal) => {
    setYearlyGoals((prevYearlyGoals) => {
      return [yearlyGoal, ...prevYearlyGoals];
    });
  };

  const addGoalHandler = (goal, addToGoals) => {
    const newGoal = {
      goalId: Math.random().toString(),
      goalName: goal,
    };

    if (addToGoals === "daily") {
      addDailyGoalHandler(newGoal);
    } else if (addToGoals === "weekly") {
      addWeeklyGoalHandler(newGoal);
    } else if (addToGoals === "yearly") {
      addYearlyGoalHandler(newGoal);
    }
  };

  return (
    <div className="app">
      <h1 className="app-heading">Welcome to Goalkeeper.</h1>
      <p className="app-info">
        This is an app where you goals can be added for an upcoming week, a
        month or a year to have a organized list of all the activities want to
        be done. Once the respective day, month or year ends, the list is empty
        for you to add new goals!
      </p>
      <AddGoalForm onAddGoal={addGoalHandler} />
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
