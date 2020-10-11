import React from "react";
import mockup from "../image/phone__mockup.png";
import Fade from "react-reveal/Fade";

class screen05 extends React.Component {
  render() {
    return (
      <div className="screen05 screen">
        <div className="screen05__main">
          <Fade left>
            <div className="screen05__mockup">
              <img src={mockup}></img>
              <div className="mockup__img"></div>
            </div>
          </Fade>

          <Fade right>
            <div className="screen05__txt">
              <div className="screen05__txt1">코로나 무비를</div>
              <div className="screen05__txt1"> 마음껏 누려보세요!</div>
              <div className="screen05__txt2">이런 저런 영화들 다~ 모였다 </div>
              <div className="screen05__txt3">코로나 무비에서 찾아보세요!!</div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen05;
