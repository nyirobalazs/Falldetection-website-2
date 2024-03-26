/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Loading } from "../Loading";
import "./style.css";

export const ButtonPrimary = ({ content = "Button", state, size, iconPlacement, className }) => {
  return (
    <button className={`button-primary ${iconPlacement} size-14-${size} state-5-${state} ${className}`}>
      {["no-icon", "right-justified", "right"].includes(iconPlacement) && <div className="button">{content}</div>}

      {["icon-only", "left-justified", "left", "right-justified", "right"].includes(iconPlacement) && (
        <Loading
          className={`${size === "small" && "class-6"}`}
          vector={
            size === "small"
              ? "https://c.animaapp.com/5n8oh5rl/img/vector-97.svg"
              : "https://c.animaapp.com/5n8oh5rl/img/vector-99.svg"
          }
          vectorClassName={`${size === "small" && "class-5"}`}
        />
      )}

      {["left-justified", "left"].includes(iconPlacement) && <div className="button-2">{content}</div>}
    </button>
  );
};

ButtonPrimary.propTypes = {
  content: PropTypes.string,
  state: PropTypes.oneOf(["default", "pressed", "focused", "hover", "disabled"]),
  size: PropTypes.oneOf(["large", "huge", "medium", "small"]),
  iconPlacement: PropTypes.oneOf(["icon-only", "left-justified", "no-icon", "right", "right-justified", "left"]),
};
