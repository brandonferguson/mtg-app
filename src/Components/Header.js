import React from "react";
import { NavLink } from "react-router-dom";
import Sets from "./Sets";

const Header = () => {
  return (
    <header>
      <ul className="nav darkblue">
        <li>
          <Sets />
        </li>
        <li>
          <NavLink to="/cards" className="btn btn-primary btn-lg">
            All Cards
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="btn btn-primary btn-lg">
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
