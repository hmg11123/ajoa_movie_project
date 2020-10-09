import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__main">
          <div className="footer1">
            <div className="footer1__title">영화 안내</div>
            <ul className="footer1__content">
              <li className="footer__txt">① 없어요</li>
              <li className="footer__txt">② 없다구요</li>
              <li className="footer__txt">③ 뭘 바라는거죠 ?</li>
            </ul>
          </div>

          <div className="footer2">
            <div className="footer2__title">영화 광고 문의</div>
            <div className="footer__txt">주지마세요</div>
          </div>

          <div className="footer3">
            <div className="footer3__title">제작자 이메일</div>
            <div className="footer3__gmail">
              <a href="mailto:faner4567@gmail.com" className="a">faner4567@gmail.com</a>
            </div>
            <div className="footer3__gmail">
              <a href="mailto:4leaf.hmg@gmail.com" className="a">4leaf.hmg@gmail.com</a>
            </div>
            <div className="footer3__gmail">
              <a href="mailto:wjddmswls0403@gmail.com" className="a">wjddmswls0403@gmail.com</a>
            </div>
            <div className="footer3__gmail">
              <a href="mailto:ouhouh0000@gmail.com" className="a">ouhouh0000@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
