import React from "react";
import mockup from "../image/phone__mockup.png";

class screen04 extends React.Component {
  render() {
    return (
      <div className="screen04 screen">
        <div className="screen04__main">
          <div className="screen04__mockup">
            <img src={mockup}></img>
          </div>

          <div className="screen04__txt">
            <div className="screen04__txt1">
              영화들로 선물을 받아보다! 너도나도 재밌게 즐긴다!!
            </div>
            <div className="screen04__txt1">점점 더 즐거운 영화타임!!</div>
            <div className="screen04__txt2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen04;
