import React, { useContext } from 'react';

import "./CalendarBody.css";
import Context from "../App/context";
import {getCalendar} from "../../actions/functions";
import CalendarItem from "../CalendarItem/CalendarItem";

const CalendarBody = () => {
  const { calendarActiveMonth } = useContext(Context);

  return (
    <div className="CalendarBody">
      <div className="CalendarDays">
        <div>П</div>
        <div>В</div>
        <div>С</div>
        <div>Ч</div>
        <div>П</div>
        <div>С</div>
        <div>В</div>
      </div>
      {getCalendar(calendarActiveMonth).map(({id, name}) => (<CalendarItem key={id} id={id}>{name}</CalendarItem>))}
    </div>
  );
};

export default CalendarBody;
