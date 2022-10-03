import React, { useContext } from 'react';

import "./CalendarItem.css";
import Context from "../App/context";
import PropTypes from "prop-types";
import classnames from "classnames";

const CalendarItem = ({ id, children }) => {
  const { calendarActiveHabit, dailyTaskList } = useContext(Context);

  const className = classnames('CalendarItem', { [`CalendarItem--active`]: Boolean(dailyTaskList.includes(calendarActiveHabit.category_id + '-' + calendarActiveHabit.habit_id + '-' + id)) });

  return (
    <div className={className}><div>{children}</div></div>
  );
};

CalendarItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  id: PropTypes.string.isRequired,
};

export default CalendarItem;
