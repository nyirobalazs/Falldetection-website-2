import React from "react";
import { ButtonIncativeWrapper } from "../../components/ButtonIncativeWrapper";
import { InputEmptyWrapper } from "../../components/InputEmptyWrapper";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="group-wrapper">
        <div className="group">
          <div className="div-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Login</div>
            </div>
            <InputEmptyWrapper className="username-input" input="empty" />
            <InputEmptyWrapper
              className="text-input-instance"
              input="empty"
              textInputContent="123"
              textInputLabel="Password"
            />
            <ButtonIncativeWrapper button="incative" className="button-primary-instance" />
          </div>
        </div>
      </div>
    </div>
  );
};
