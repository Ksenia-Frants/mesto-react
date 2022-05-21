import React from "react";
import logo from "../images/logo/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта - Mesto Russia." className="logo" />
    </header>
  );
}

export default Header;
