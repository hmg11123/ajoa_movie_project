import React from "react";
import logo from "../image/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <span className="logo">
          <img className="logo__col1" src={logo} />
        </span>
        <span className="menu">
          <span className="menu__col1" onClick={this._scrollHandler}>
            개봉 예정작
          </span>
          <span className="menu__col2">광고 문의</span>
        </span>
      </div>
    );
  }

  _scrollHandler = () => {
    const screen06 = document.getElementById("screen06");
    window.scrollBy(screen06);
  };
}

export default Header;
