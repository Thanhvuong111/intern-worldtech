import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header">
        <h2>Burger Builder</h2>
        <div>
          <label>
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link><i class="uil uil-arrow-left"></i>
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link><i class="uil uil-arrow-right"></i>
            <input className="search"></input>
          </label>
        </div>
      </header>
      <div className="shop">
        <ul>
          <li>
            <Link to="/vg">Burger Builder</Link>
          </li>
          <li>
            <Link to="/Order">Order</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;