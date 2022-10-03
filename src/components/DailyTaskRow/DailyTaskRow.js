import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";

import CheckButton from "../CheckButton/CheckButton";
import "./DailyTaskRow.css";
import {getNextFourDays} from "../../actions/functions";
import Context from "../App/context";

const DailyTaskRow = ({ category_id, habit_id }) => {
  const { habitActiveCategoryList, categoryHabitList, setCalendarActiveHabit, goToHabitInfo } = useContext(Context);
  const dateList = getNextFourDays();

  const className = classnames('DailyTaskRow--name', { [`DailyTaskRow--hidden`]: Boolean(!habitActiveCategoryList.includes(category_id)) });

  return (
    <tr className={className}>
      <td onClick={() => {setCalendarActiveHabit({category_id: category_id, habit_id: habit_id}); goToHabitInfo();}}>{categoryHabitList[category_id].habitList[habit_id]}</td>
      <td><CheckButton category_id={category_id} habit_id={habit_id} date={dateList[0]}/></td>
      <td><CheckButton category_id={category_id} habit_id={habit_id} date={dateList[1]}/></td>
      <td><CheckButton category_id={category_id} habit_id={habit_id} date={dateList[2]}/></td>
      <td><CheckButton category_id={category_id} habit_id={habit_id} date={dateList[3]}/></td>
    </tr>
      )
};

DailyTaskRow.propTypes = {
  habit_id: PropTypes.number.isRequired,
  category_id: PropTypes.number.isRequired,
};

export default DailyTaskRow;
