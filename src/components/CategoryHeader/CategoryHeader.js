import React, {useContext} from 'react';

import "./CategoryHeader.css";
import PropTypes from "prop-types";
import Context from "../App/context";

const CategoryHeader = ({ id }) => {
  const { categoryHabitList } = useContext(Context);

  return (<div className="CategoryHeader">{categoryHabitList[id].emoji + categoryHabitList[id].name}</div>);
};

CategoryHeader.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CategoryHeader;
