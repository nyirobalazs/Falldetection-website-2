/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Loading = ({
  vector = "https://c.animaapp.com/5n8oh5rl/img/vector-116.svg",
  className,
  vectorClassName,
}) => {
  return (
    <div className={`loading ${className}`}>
      <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
    </div>
  );
};

Loading.propTypes = {
  vector: PropTypes.string,
};
