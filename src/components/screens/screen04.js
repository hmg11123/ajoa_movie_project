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
              <div className="screen04__txt1">추천 받은 영화로</div>
              <div className="screen04__txt2">집콕 생활 같이 하자</div>

              <div className="screen04__txt3">상영중인 영화들부터</div>
              <div className="screen04__txt4">개봉되지 않은 영화들까지 다~ 싹쓰리 모였다!!</div>
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
