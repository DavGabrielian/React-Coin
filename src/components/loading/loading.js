import React from "react";
import PropTypes from "prop-types";
import "./loading.css";

const Loading = ({ height, width }) => {
  return <div className="Loading" style={{ width, height }} />;
};

Loading.defaultProps = {
  width: '80px',
  height: '80px'
}

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};


export default Loading;
