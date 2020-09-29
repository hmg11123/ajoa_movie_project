import React from "react";
import mockup from "../image/phone__mockup.png";

class screen01 extends React.Component {
  render() {
    return (
      <div className="screen01 screen">
        <div className="screen01__main">
          <div className="screen01__mockup">
            <img src={mockup}></img>
          </div>

          <div className=""></div>
        </div>
      </div>
    );
  }
}
export default screen01;
