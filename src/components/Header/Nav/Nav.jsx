import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Nav.css";
import { userContext } from "../../../contexts/userContext";
import { LogOut } from "../../Auth/LogOut";

export const Nav = () => {
  const { user } = useContext(userContext);

  const closeMenu = () => {
    const checkbox = document.querySelector(".hamburger-menu input");
    checkbox.checked = false;
  };

  return user ? (
    <>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div onClick={closeMenu}>
            <Link to="/">Home</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/events">Events</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/about">About</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </div>
          <div onClick={closeMenu}>
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
          <div onClick={closeMenu}>
            <Link to="/">Home</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/about">About</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/login">Log In</Link>
          </div>
          <div onClick={closeMenu}>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
