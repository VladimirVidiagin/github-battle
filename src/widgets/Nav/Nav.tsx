import { NavLink } from "react-router-dom";
import { sunIcon, moonIcon } from "../../shared/Icons/Icons";
import React from "react";

interface NavProps {
  theme: string;
  toggleTheme: () => void;
}

const Nav: React.FC<NavProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="split">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Github Battle
      </NavLink>
      <ul className="row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/battle"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Battle
          </NavLink>
        </li>
        <li>
          <button className="btn secondary icon" onClick={toggleTheme}>
            {theme === "light" ? moonIcon : sunIcon}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
