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
              <div className="screen02__txt1">요즘 유행인 코로나</div>
              <div className="screen02__txt1">유행하는 코로나 무비</div>
              <div className="screen02__txt1"></div>

              <div className="screen02__txt2"></div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
