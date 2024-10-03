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