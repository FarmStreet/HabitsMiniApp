import React from 'react';

import "./DailyTaskList.css";
import DailyHeaderRow from "../DailyHeaderRow/DailyHeaderRow";
import DailyTaskBody from "../DailyTaskBody/DailyTaskBody";

const DailyTaskList = () => {

  return (
    <div>
      <table className="DailyTaskList">
        <DailyHeaderRow/>
        <DailyTaskBody/>
      </table>
    </div>
  )
};

export default DailyTaskList;
