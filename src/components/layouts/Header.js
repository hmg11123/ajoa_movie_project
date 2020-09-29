import React from "react";
import logo from "../image/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img className="logo__col1" src={logo} />
        </div>
        <div className="menu">
          <div className="menu__col1">개봉 예정작</div>
          <div className="menu__col2">광고 문의</div>
        </div>
        <div className="main">
          <div className="main__col1">집콕 생활 하는 시대 </div>
          <div className="main__col2">영화가 항상 필요한 시대</div>
          <div className="main__col3">영화가 필요할 땐</div>
          <div className="main__col4"> 코로나 무비!! </div>
        </div>
      </div>
    );
  }
}

export default Header;
