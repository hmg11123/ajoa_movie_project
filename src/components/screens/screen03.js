import React from "react";
import mockup from "../image/phone__mockup.png";

class screen03 extends React.Component {
  render() {
    return (
      <div className="screen03 screen">
        <div className="screen03__main">
          <div className="screen03__mockup">
            <img src={mockup}></img>
          </div>

          <div className="screen03__txt">
            <div className="screen03__txt1">오늘의 영화</div>
            <div className="screen03__txt2">과연 어떤 영화 동영상일지??</div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen03;
