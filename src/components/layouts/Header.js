import React from "react";
import logo from "../image/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img className="logo__col1" src={logo} />
        </div>
        <div className="title">
          <div className="menu__col1">개봉 예정작</div>
          <div className="menu__col2">광고 문의</div>
        </div>
      </div>
    );
  }
}

export default Header;
