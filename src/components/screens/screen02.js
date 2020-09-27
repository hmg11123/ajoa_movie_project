import React from "react";
import mockup from "../image/phone__mockup.png";

class screen02 extends React.Component {
  render() {
    return (
      <div className="screen02 screen">
        <div className="screen02__main">
          <div className="screen02__mockup">
            <img src={mockup}></img>
          </div>

          <div className="screen02__txt">
            <div className="screen02__txt1">코로나무비</div>
            <div className="screen02__txt2">영화의 모든것을 알려준다 !!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen02;
