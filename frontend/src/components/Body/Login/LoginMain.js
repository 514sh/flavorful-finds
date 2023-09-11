import React from "react";
import BodyContainer from "../BodyContainer";
import Login from "./Login/Login";
import RegisterModal from "./RegisterModal/RegisterModal";

const LoginMain = ({ ...props }) => {
  return (
    <BodyContainer>
      <Login {...props} />
      <RegisterModal {...props} />
    </BodyContainer>
  );
};

export default LoginMain;
