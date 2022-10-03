import React, { useContext } from 'react';

import Context from "../App/context";
import "./AddHabitButton.css";

const AddHabitButton = () => {
  const { goToSetCategory } = useContext(Context);

  return (
    <div className="AddHabitButton" onClick={() => {goToSetCategory()}}/>
  )
};

export default AddHabitButton;
