import React from "react";
import mockup from "../image/phone__mockup.png";

class screen05 extends React.Component {
  render() {
    return (
      <div className="screen05 screen">
        <div className="screen05__main">
          <div className="screen05__mockup">
            <img src={mockup}></img>
          </div>

          <div className="screen05__txt">
            <div className="screen05__txt1"></div>
            <div className="screen05__txt2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen05;
