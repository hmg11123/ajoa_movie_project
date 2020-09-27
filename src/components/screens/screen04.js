import React from "react";
import mockup from "../image/phone__mockup.png";

class screen04 extends React.Component {
  render() {
    return (
      <div className="screen04 screen">
        <div className="screen04__main">
          <div className="scree04__txt"></div>
        </div>

        <div className="screen04__main">
          <div className="screen04__mockup">
            <img src={mockup}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default screen04;
