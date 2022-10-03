import React, { useContext } from 'react';

import Context from "../App/context";
import "./FinalAddHavingButton.css";
import MainButton from "../MainButton/MainButton";

const FinalAddHavingButton = () => {
  const { goToHome, addToDailyHabitList, activeCategory, activeHabit } = useContext(Context);

  return (
    <MainButton onClick={() => {
      if (typeof activeCategory !== "number" || typeof activeHabit !== "number") return;
      addToDailyHabitList({category_id: activeCategory, habit_id: activeHabit});
      goToHome();
    }}>Продолжить</MainButton>
  )
};

export default FinalAddHavingButton;
