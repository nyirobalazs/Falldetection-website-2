/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Close15 } from "../../icons/Close15";
import { Loading } from "../Loading";
import "./style.css";

export const TextInput = ({
  message = "Here’s a hint that might help you.",
  content = "Text input content",
  label = "Text input label",
  size,
  state,
  showIcon,
  className,
  loading = "https://c.animaapp.com/5n8oh5rl/img/loading-1.svg",
  divClassName,
}) => {
  return (
    <div className={`text-input ${state} show-icon-${showIcon} ${size} ${className}`}>
      {["caption", "error", "success"].includes(state) && (
        <>
          <div className="input">
            {!showIcon && state === "caption" && (
              <div className="frame">
                <div className="text-input-label">{label}</div>
              </div>
            )}

            {showIcon && (
              <Loading
                vector={
                  state === "success"
                    ? "https://c.animaapp.com/5n8oh5rl/img/vector-109.svg"
                    : state === "caption"
                    ? "https://c.animaapp.com/5n8oh5rl/img/vector-115.svg"
                    : "https://c.animaapp.com/5n8oh5rl/img/vector-108.svg"
                }
              />
            )}

            {["error", "success"].includes(state) && (
              <>
                <div className="div">
                  <div className="text-wrapper">{label}</div>
                  <div className="text-input-content">{content}</div>
                </div>
                <Close15 className="close" />
              </>
            )}

            {showIcon && state === "caption" && (
              <div className="frame-2">
                <div className="text-input-label-2">
                  {size === "large" && <>{label}</>}

                  {size === "medium" && <>Search</>}
                </div>
              </div>
            )}
          </div>
          <p className="here-s-a-hint-that">{message}</p>
        </>
      )}

      {((!showIcon && size === "medium" && state === "default") ||
        (!showIcon && state === "disabled") ||
        (!showIcon && state === "filled") ||
        (size === "large" && state === "default")) && (
        <div className="frame-3">
          {!showIcon && <div className="text-input-label-3">{label}</div>}

          {state === "filled" && <div className="text-input-content-2">{content}</div>}

          {showIcon && (
            <>
              <Loading vector="https://c.animaapp.com/5n8oh5rl/img/vector-115.svg" />
              <div className="frame-2">
                <div className="text-input-label-2">{label}</div>
              </div>
            </>
          )}
        </div>
      )}

      {(state === "pressed" || (!showIcon && state === "typing")) && (
        <div className="frame-4">
          {state === "typing" && (
            <>
              <div className="text-input-label-4">{label}</div>
              <div className="text-input-content-3">{content}</div>
            </>
          )}

          {!showIcon && state === "pressed" && <div className="text-input-label-2">{label}</div>}

          {showIcon && (
            <>
              <Loading vector="https://c.animaapp.com/5n8oh5rl/img/vector-115.svg" />
              <div className="frame-5">
                {size === "large" && <div className="text-input-label-2">{label}</div>}

                {size === "medium" && <>{label}</>}
              </div>
            </>
          )}
        </div>
      )}

      {((showIcon && size === "medium" && state === "default") ||
        (showIcon && size === "medium" && state === "filled") ||
        (showIcon && state === "disabled") ||
        (showIcon && state === "typing")) && <Loading vector="https://c.animaapp.com/5n8oh5rl/img/vector-115.svg" />}

      {((showIcon && size === "medium" && state === "default") ||
        (showIcon && size === "medium" && state === "filled") ||
        (showIcon && state === "disabled")) && (
        <div className="frame-6">
          {state === "disabled" && <div className="text-input-label-5">{label}</div>}

          {state === "filled" && (
            <>
              <div className="text-input-label-6">{label}</div>
              <div className={`text-input-content-4 ${divClassName}`}>{content}</div>
            </>
          )}

          {state === "default" && <>{label}</>}
        </div>
      )}

      {showIcon && state === "filled" && size === "large" && (
        <>
          <img className="close" alt="Loading" src={loading} />
          <div className="frame-2">
            <div className="text-input-label-6">{label}</div>
            <div className={`text-input-content-4 ${divClassName}`}>{content}</div>
          </div>
        </>
      )}

      {state === "typing" && showIcon && (
        <div className="frame-7">
          <div className="text-input-label-6">{label}</div>
          <div className="text-input-content-4">{content}</div>
        </div>
      )}

      {["pressed", "typing"].includes(state) && <Close15 className="close" />}
    </div>
  );
};

TextInput.propTypes = {
  message: PropTypes.string,
  content: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium"]),
  state: PropTypes.oneOf(["caption", "default", "success", "filled", "pressed", "typing", "error", "disabled"]),
  showIcon: PropTypes.bool,
  loading: PropTypes.string,
};
