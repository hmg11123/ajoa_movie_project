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
              <div className="screen02__txt1">전세계적으로 유행하는 코로나</div>
              <div className="screen02__txt1">전세계적으로</div>
              <div className="screen02__txt1">유행하는 코로나 무비</div>

              <div className="screen02__txt2">
                코로나19 확진자를 완치 응원 하고자 만든 사이트입니다.
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
