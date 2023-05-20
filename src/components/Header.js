import React from "react";
import headerLogo from "../images/logo-place.svg";

function Header() {
  return (
    <header className="page__header header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип"
      />
    </header>
  );
}

export default Header;
