import React, {useContext} from 'react';

import "./CategoryItem.css";
import PropTypes from "prop-types";
import Context from "../App/context";

const CategoryItem = ({ id, children, emoji}) => {
  const { goToSetHabit, setActiveCategory } = useContext(Context);


  return (<div id={id} className="CategoryItem" onClick={() => { setActiveCategory(id); goToSetHabit() }}>
    <div className="CategoryEmoji">{emoji}</div>
    <div>{children}</div>
  </div>);
};

CategoryItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  emoji: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CategoryItem;