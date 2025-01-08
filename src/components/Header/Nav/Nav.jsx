import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Nav.css";

export const Nav = () => {
  return (
    <>
      <div id="nav">
        <div id="login">
          <Link to="/login">Log in</Link>
        </div>
        <div id="signin">
          <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </>
  );
};
