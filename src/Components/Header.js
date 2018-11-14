import React from "react";
import { NavLink } from "react-router-dom";
import Sets from "./Sets";

const Header = () => {
  return (
    <header>
      <ul className="nav darkblue">
        <li>
          <NavLink exact to="/" className="btn btn-primary btn-lg headers-btn">
            Home
          </NavLink>
        </li>
        <li>
          <Sets />
        </li>
        <li>
          <NavLink to="/cards" className="btn btn-primary btn-lg headers-btn">
            All Cards
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
