import React from "react";
import mockup from "../image/phone__mockup.png";
import Fade from "react-reveal/Fade";

class screen04 extends React.Component {
  render() {
    return (
      <div className="screen04 screen">
        <div className="screen04__main">
          <Fade left>
            <div className="screen04__txt">
              <div className="screen04__txt1">즐거움 2배 기쁨도 2배!</div>
              <div className="screen04__txt2">
                바쁜 날 빨리 볼 수 있게 영화예고편 다~ 모아봤다!!
              </div>
              <div className="screen04__txt3">
                내가 보고싶은 영화 미리보기 !
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="screen04__mockup">
              <img src={mockup}></img>
              <div className="mockup__img"></div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen04;
