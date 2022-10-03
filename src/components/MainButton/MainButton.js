import React from 'react';

import "./MainButton.css";
import PropTypes from "prop-types";

const MainButton = ({onClick, children}) => {

  return (
    <div className="FinalAddHavingButton" onClick={onClick}>{children}</div>
  )
};

MainButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainButton;
