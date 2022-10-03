import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../App/context";

import "./DailyCategoryRow.css";

const DailyCategoryRow = ({ category_id }) => {
  const { habitActiveCategoryList, addToHabitActiveCategoryList, removeFromHabitActiveCategoryList, categoryHabitList } = useContext(Context);

  return (
    <tr className="DailyCategoryRow" onClick={() => {
      if (habitActiveCategoryList.includes(category_id))
        removeFromHabitActiveCategoryList(category_id);
      else addToHabitActiveCategoryList(category_id);
    }}>
      <td>{categoryHabitList[category_id].name + categoryHabitList[category_id].emoji}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
};

DailyCategoryRow.propTypes = {
  category_id: PropTypes.number.isRequired,
};

export default DailyCategoryRow;
