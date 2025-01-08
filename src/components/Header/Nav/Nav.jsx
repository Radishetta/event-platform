import React from "react";
import { Login } from "../../Auth/Login";
import { Signin } from "../../Auth/Signin";
import "../../../styles/Nav.css";

export const Nav = () => {
  return (
    <>
      <div id="nav">
        <div id="login">
          <Login />
        </div>
        <div id="signin">
          <Signin />
        </div>
      </div>
    </>
  );
};
