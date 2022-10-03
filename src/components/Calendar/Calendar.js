import React from 'react';

import "./Calendar.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarBody from "../CalendarBody/CalendarBody";

const Calendar = () => (
    <div className="Calendar">
      <CalendarHeader/>
      <CalendarBody/>
  </div>
  );

export default Calendar;
