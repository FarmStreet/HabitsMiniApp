import React from 'react';

import "./DailyHeaderRow.css";
import {getNextFourDaysNames} from "../../actions/functions";

const DailyHeaderRow = () => {

  const dateList = getNextFourDaysNames();

  return (
    <thead>
    <tr className="DailyHeaderRow">
      <td></td>
      {dateList.map(({ weekday, day }, key) => <td key={key}>{weekday}<br/>{day}</td>)}
    </tr>
    </thead>
  )
};

export default DailyHeaderRow;
