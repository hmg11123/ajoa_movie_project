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
            </div>
          </Fade>

          <Fade right>
            <div className="screen05__txt">
              <div className="screen05__txt1">오늘의 영화를</div>
              <div className="screen05__txt2">마음껏 누려보세요 !</div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default screen05;
