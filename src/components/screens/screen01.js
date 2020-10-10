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
              <div className="screen01__txt1">
                2020 코로나 무비가
                <div className="screen01__txt1">찾아옵니다</div>
              </div>
              <div className="screen01__txt2">가족과 보기 딱 좋은 영화!</div>
              <div className="screen01__txt3">웃음 + 감동 다 잡아!!!</div>
              <div className="screen01__img">
                <a
                  className="img__col1"
                  href="https://play.google.com/store/apps/details?id=rocateer.ajoa"
                >
                  <img src="http://leafsoftware.cafe24.com/ajoa/assets/images/MM00/btn-top-google.png"></img>
                </a>
                <a
                  className="img__col2"
                  href="https://apps.apple.com/us/app/%EC%95%84%EC%A1%B0%EC%95%84-ajoa/id1494672868"
                >
                  <img src="http://leafsoftware.cafe24.com/ajoa/assets/images/MM00/btn-top-apple.png"></img>
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="screen01__mockup">
              <img src={mockup} />
              <div className="mockup__img"></div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
export default screen01;
