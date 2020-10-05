import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__main">
          <div className="footer1">
            <div className="footer1__title">영화 안내</div>
            <ul className="footer1__content">
              <li className="footer__txt">① 은하바보</li>
              <li className="footer__txt">② 은하는 ...응</li>
              <li className="footer__txt">③ 333333333333응</li>
            </ul>
          </div>

          <div className="footer2">
            <div className="footer2__title">영화 광고 문의</div>
            <div className="footer__txt">은하바보은하바보</div>
          </div>

          <div className="footer3">
            <div className="footer3__title">제작자 이메일</div>
            <div className="footer3__gmail">faner4567@gmail.com</div>
            <div className="footer3__gmail">7ygfdshjkl</div>
            <div className="footer3__gmail">wjddmswls0403@gmail.com</div>
            <div className="footer3__gmail">ouhouh0000@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
