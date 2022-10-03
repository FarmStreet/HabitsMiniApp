import React, { useContext } from 'react';

import "./HabitList.css";
import PropTypes from "prop-types";
import HabitItem from "../HabitItem/HabitItem";
import Context from "../App/context";

const HabitList = ({ id }) => {
  const { getHabbitIdList, categoryHabitList } = useContext(Context);

  return (<div className="HabitList">
    {categoryHabitList[id].habitList.map((name, key) => (getHabbitIdList(id).includes(key) ? '' :  <HabitItem id={key} key={key}>{name}</HabitItem>))}
  </div>);
};

HabitList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default HabitList;