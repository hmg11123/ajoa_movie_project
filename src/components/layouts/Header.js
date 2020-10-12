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
import {Route} from "react-router-dom";
import {screen06} from "../screens";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollToScreen06: function () {
        scroll.scrollTo(3615);
      },
      scrollToFooter: function () {
        scroll.scrollTo(4615);
      },
      scrollMore: function () {
        scroll.scrollMore(100);
      },
    };
  }
  render() {
    const { scrollToScreen06, scrollToFooter } = this.state;
    return (
      <div className="Header">
        <span className="logo">
          <img className="logo__col1" src={logo} />
        </span>
        <span className="menu">
          <span className="menu__col1" onClick={scrollToScreen06}>
            개봉 예정작
          </span>
          <span className="menu__col2" onClick={scrollToFooter}>
            광고 문의
          </span>
        </span>
      </div>
    );
  }
}

export default Header;
