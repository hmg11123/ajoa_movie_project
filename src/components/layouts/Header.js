import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="title"></div>
        <Link to="/screen06">개봉 예정작</Link>
        <Link to="/screen07">광고 문의</Link>
      </div>
    );
  }
}

export default Header;
