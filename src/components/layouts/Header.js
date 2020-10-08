import React from "react";
import logo from "../image/logo.png";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTo: function () {
        scroll.scrollTo(100);
      },
      scrollMore: function () {
        scroll.scrollMore(100);
      },
    };
  }
  render() {
    return (
      <div className="Header">
        <span className="logo">
          <img className="logo__col1" src={logo} />
        </span>
        <span className="menu">
          <span className="menu__col1" onClick={this._menuBtnClickHandler}>
            개봉 예정작
          </span>
          <span className="menu__col2">광고 문의</span>
        </span>
      </div>
    );
  }

  _menuBtnClickHandler = () => {
    console.log("sfsd");
  };
}

export default Header;
