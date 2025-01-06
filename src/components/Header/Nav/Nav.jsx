import { Login } from "./Login";
import { Signin } from "./Signin";
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
