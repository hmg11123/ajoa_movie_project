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
              <div className="screen02__txt1">
                1982년 충청도를
                <div className="screen02__txt1">뒤흔든 전설의</div>
                <div className="screen02__txt1">대박사건!!</div>
              </div>

              <div className="screen02__txt2">
                요즘 연애는 연애도 아니여~~!!
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
