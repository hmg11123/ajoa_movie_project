import React from "react";
import mockup from "../image/phone__mockup.png";
import Fade from "react-reveal/Fade";

class screen03 extends React.Component {
  render() {
    return (
      <div className="screen03 screen">
        <div className="screen03__main">
          <Fade left>
            <div className="screen03__mockup">
              <img src={mockup}></img>
              <div className="mockup__img"></div>
            </div>
          </Fade>
          <Fade right>
            <div className="screen03__txt">
              <div className="screen03__txt1">꿀잼 영화 모음집!!</div>
              <div className="screen03__txt2">어떤 영화일지 궁금하시죠?</div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen03;
