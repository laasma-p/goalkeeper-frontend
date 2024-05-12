import DailyGoals from "../DailyGoals/DailyGoals";
import WeeklyGoals from "../WeeklyGoals/WeeklyGoals";
import YearlyGoals from "../YearlyGoals/YearlyGoals";
import AddGoalForm from "../../containers/AddGoalForm/AddGoalForm";
import Header from "../Header/Header";
import classes from "./Goals.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const [dailyGoals, setDailyGoals] = useState([]);
  const [weeklyGoals, setWeeklyGoals] = useState([]);
  const [yearlyGoals, setYearlyGoals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      fetchGoals();
    }
  }, [navigate]);

  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/goals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      console.log("Cannot fetch goals", error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <>
      <Header />
      <div className={classes.goals}>
        <AddGoalForm fetchUpdatedGoals={fetchGoals} />
        <DailyGoals dailyGoals={dailyGoals} />
        <WeeklyGoals weeklyGoals={weeklyGoals} />
        <YearlyGoals yearlyGoals={yearlyGoals} />
      </div>
    </>
  );
};

export default Goals;
