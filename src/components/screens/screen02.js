import React from "react";
import mockup from "../image/phone__mockup.png";
import Fade from "react-reveal/Fade";

class screen02 extends React.Component {
  render() {
    return (
      <div className="screen02 screen">
        <div className="screen02__main">
          <Fade left>
            <div className="screen02__mockup">
              <img src={mockup}></img>
              <div className="mockup__img"></div>
            </div>
          </Fade>
          <Fade right>
            <div className="screen02__txt">
              <div className="screen02__txt1">영화 맞춤 코로나 무비</div>
              
              <div className="screen02__txt2">남녀노소 누구든 편안한</div>
              <div className="screen02__txt3">마음으로 볼 수 있는 영화</div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
