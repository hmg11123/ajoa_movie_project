import React from "react";
import mockup from "../image/phone__mockup.png";
import Fade from "react-reveal/Fade";

class screen01 extends React.Component {
  render() {
    return (
      <div className="screen01 screen">
        <div className="screen01__main">
          <Fade left>
            <div className="screen01__txt">
              <div className="screen01__txt1">길게길게길게길게길게</div>
              <div className="screen01__txt2">목업목업목업목업목업</div>
            </div>
          </Fade>
          <Fade right>
            <div className="screen01__mockup">
              <img src={mockup}></img>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
export default screen01;
