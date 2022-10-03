import React, {useContext} from 'react';
import Context from "../App/context";

import "./AddNewHabit.css";

const AddNewHabit = () => {
  const { categoryHabitList, addToCategoryHabitList, activeCategory, setActiveHabit } = useContext(Context);

  return (
    <div className="AddNewHabitContainer">
      <input id="AddNewHabitInput" className="AddNewHabitInput"/>
      <div onClick={() => {
        if (document.getElementById("AddNewHabitInput").value) {
          addToCategoryHabitList(document.getElementById("AddNewHabitInput").value, activeCategory);
          setActiveHabit(categoryHabitList[activeCategory].habitList.indexOf(document.getElementById("AddNewHabitInput").value));
          document.getElementById("AddNewHabitInput").value = '';
        }
      }} className="AddNewHabitButton">Добавить свой вариант</div>
    </div>)
};

export default AddNewHabit;
