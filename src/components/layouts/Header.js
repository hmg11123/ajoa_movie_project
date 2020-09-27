import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <div className="logo__col1"></div>
        </div>
        <div className="title">
          <div className="menu__col1">개봉 예정작</div>
          <div className="menu__col2">광고 문의</div>
        </div>
      </div>
    );
  }

  _screen06 = () => {};
}

export default Header;
