import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__main">
          <div className="footer1">
            <div className="footer1__title">영화 안내</div>
            <ul className="footer1__content">
              <li className="footer__txt">1</li>
              <li className="footer__txt">2</li>
              <li className="footer__txt">3</li>
            </ul>
          </div>

          <div className="footer2">
            <div className="footer2__title">영화 광고 문의</div>
            <div className="footer__txt"></div>
          </div>

          <div className="footer3">
            <div className="footer3__title">제작자 이메일</div>
            <div className="footer3__gmail"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
