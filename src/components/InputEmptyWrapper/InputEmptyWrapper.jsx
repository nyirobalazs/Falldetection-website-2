/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { TextInput } from "../TextInput";
import "./style.css";

export const InputEmptyWrapper = ({ input, className, textInputContent = "jane.doe", textInputLabel = "Username" }) => {
  const [state, dispatch] = useReducer(reducer, {
    input: input || "empty",
  });

  return (
    <div
      className={`input-empty-wrapper ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <TextInput
        className={`${state.input === "filled" ? "class-3" : "class-4"}`}
        content={textInputContent}
        divClassName={`${state.input === "filled" ? "class" : "class-2"}`}
        label={textInputLabel}
        loading={state.input === "empty" ? "https://c.animaapp.com/5n8oh5rl/img/loading-3@2x.png" : undefined}
        showIcon
        size="large"
        state="filled"
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        input: "filled",
      };
  }

  return state;
}

InputEmptyWrapper.propTypes = {
  input: PropTypes.oneOf(["filled", "empty"]),
  textInputContent: PropTypes.string,
  textInputLabel: PropTypes.string,
};

class InputEmptyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textInputContent: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textInputContent: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.textInputContent}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputEmptyWrapper;