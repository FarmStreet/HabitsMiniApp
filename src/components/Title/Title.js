import React from 'react';

import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (<div className="Title">{children}</div>);
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Title;
