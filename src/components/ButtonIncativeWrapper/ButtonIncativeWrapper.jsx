/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import "./style.css";

export const ButtonIncativeWrapper = ({ button, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    button: button || "incative",
  });

  return (
    <div
      className={`button-incative-wrapper ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <ButtonPrimary
        className={`${state.button === "hover" ? "class-7" : state.button === "active" ? "class-8" : "class-9"}`}
        content="Login"
        iconPlacement="no-icon"
        size="large"
        state="default"
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        button: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        button: "incative",
      };
  }

  return state;
}

ButtonIncativeWrapper.propTypes = {
  button: PropTypes.oneOf(["incative", "active", "hover"]),
};
