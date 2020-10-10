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
              <div className="screen02__txt1">전 세계적으로</div>
              <div className="screen02__txt1">유행할 코로나 무비</div>

              <div className="screen02__txt2">코로나19에도 개봉하는</div>
              <div className="screen02__txt3">
                영화를 위해 만들어진 사이트입니다.
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
