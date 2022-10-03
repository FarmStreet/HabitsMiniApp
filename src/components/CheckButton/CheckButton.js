import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "./CheckButton.css";
import Context from "../App/context";
import {getNextFourDays} from "../../actions/functions";

const CheckButton = ({ category_id, habit_id, date }) => {
  const { dailyTaskList, addToDailyTaskList } = useContext(Context);
  const isActive = dailyTaskList.includes(category_id + '-' + habit_id + '-' + date);

  const className = classnames('CheckButton', { [`CheckButton--enabled`]: Boolean(isActive) });

  return <div className={className} onClick={() => {
    if (isActive || date !== getNextFourDays()[0]) return;
    addToDailyTaskList(category_id, habit_id, date);
  }}/>
};

CheckButton.propTypes = {
  habit_id: PropTypes.number.isRequired,
  category_id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default CheckButton;