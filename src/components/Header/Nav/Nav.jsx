import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Nav.css";
import { userContext } from "../../../contexts/userContext";
import { LogOut } from "../../Auth/LogOut";

export const Nav = () => {
  const { user } = useContext(userContext);
  return user ? (
    <>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/events">Events</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <LogOut />
          </div>
        </nav>
      </aside>
    </>
  ) : (
    <>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/login">Log In</Link>
          </div>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
