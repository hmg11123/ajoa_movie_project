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
            </div>
          </Fade>
          <Fade right>
            <div className="screen02__txt">
              <div className="screen02__txt1">코로나무비</div>
              <div className="screen02__txt2">어떤 영화인지 궁금하신가요?</div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen02;
