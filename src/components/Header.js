import React from "react";
import logo from "../images/logo/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Mesto Russia." className="logo"/>
    </header>
  );
}

export default Header;