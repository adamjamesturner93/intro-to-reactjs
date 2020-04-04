import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <h3>
          <NavLink className="nav__link nav__link--title" to="/">
            Adam Turner
          </NavLink>
        </h3>
        <ul>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              exact
              to="/"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
