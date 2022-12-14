import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <a href=".Order">Order</a>
          <a href=".Order">Review</a>
          <a href=".Order">Inventory</a>
          <a href=".Order">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
