import React, {useContext} from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

import "./HabitItem.css";
import Context from "../App/context";

const HabitItem = ({ id, children }) => {
  const { activeHabit, setActiveHabit } = useContext(Context);

  const className = classnames('HabitItem', { [`HabitItem--active`]: Boolean(activeHabit === id) });

  return (<div onClick={(() => setActiveHabit(id))} className={className}>{children}</div>);
};

HabitItem.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default HabitItem;