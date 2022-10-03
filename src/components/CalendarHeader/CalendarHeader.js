import React, { useContext } from 'react';

import "./CalendarHeader.css";
import Context from "../App/context";
import {getMonthAndYearDate} from "../../actions/functions";

const CalendarHeader = () => {
  const { setCalendarActiveMonth, calendarActiveMonth } = useContext(Context);

  return (
    <div className="CalendarHeader">
      <span className="CalendarHeaderButton" onClick={() => setCalendarActiveMonth(calendarActiveMonth - 1)}>{'< ' + getMonthAndYearDate(calendarActiveMonth - 1)}</span>
      <span>{getMonthAndYearDate(calendarActiveMonth)}</span>
      <span className="CalendarHeaderButton" onClick={() => setCalendarActiveMonth(calendarActiveMonth + 1)}>{getMonthAndYearDate(calendarActiveMonth + 1) + ' >'}</span>
    </div>
  );
};

export default CalendarHeader;
