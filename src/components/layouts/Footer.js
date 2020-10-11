import React from "react";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialogOpen: false,

      input_title: "",
      input_desc: "",
      input_manager: "",
      input_mobile: "",
      input_email: "",
    };
  }
  render() {
    const {
      isDialogOpen,
      input_title,
      input_desc,
      input_manager,
      input_mobile,
      input_email,
    } = this.state;

    return (
      <div className="footer">
        <Fade bottom cascade>
          <div className="footer__main">
            <div className="footer1">
              <div className="footer1__title">영화 신청 안내</div>
              <ul className="footer1__content">
                <p className="footer__txt">① 코로나 무비 앱 설치 및 가입</p>
                <p className="footer__txt">② 가입 승인 후 영화 소개</p>
                <p className="footer__txt">③ 영화 등록 후 추가 완료!</p>
              </ul>
            </div>
            <div className="footer2">
              <div className="footer2__title">영화 광고 문의</div>
              <div className="footer__txt"> 광고 및 제휴 문의 등 코로나 무비가 연락을 기다립니다.
                <input
                  type="button"
                  value="광고 문의"
                  onClick={this._isDialogOpenToggle}
                />
              </div>
            </div>

            <div className="footer3">
              <div className="footer3__title">제작자 이메일</div>
              <div className="footer3__gmail">
                <a href="mailto:faner4567@gmail.com" className="a">
                  faner4567@gmail.com
                </a>
              </div>
              <div className="footer3__gmail">
                <a href="mailto:4leaf.hmg@gmail.com" className="a">
                  4leaf.hmg@gmail.com
                </a>
              </div>
              <div className="footer3__gmail">
                <a href="mailto:wjddmswls0403@gmail.com" className="a">
                  wjddmswls0403@gmail.com
                </a>
              </div>
              <div className="footer3__gmail">
                <a href="mailto:ouhouh0000@gmail.com" className="a">
                  ouhouh0000@gmail.com
                </a>
              </div>
            </div>
            <div className="footer4">
              <p className="footer4__col1"></p>
              <p>
                <span>사업자등록번호:179-520-79626</span>
                <span> 통신 판매업신고번호:제 2020-충남공주-2360</span>
                <span>대표이사: 오은하</span>
                <span>법인명:(주)코로나무비</span>
                <span>개인정보관리책임자 : 오은하</span>
              </p>
              <p className="footer4__juso">
                <span>주소: 충청남도 공주시 금학동 250-6</span>
                <span>대표번호: 010-5207-9626</span>
                <span>서비스 문의: faner4567@gmail.com</span>
                <span>제휴 문의: 4leaf.hmg@gmail.com </span>
              </p>
            </div>
          </div>
        </Fade>
        <Fade cascade>
          {/* Dialog Area */}
          <Dialog
            onClose={this._isDialogOpenToggle}
            aria-labelledby="customized-dialog-title"
            open={isDialogOpen}
            maxWidth={"md"}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={this._isDialogOpenToggle}
              class="dialog_title"
            >
              마케팅 및 광고문의
            </DialogTitle>
            <DialogContent>
              <div>CORONA MOVIE에 영화를 소개하고 싶으신가요?</div>
              <div>
                <div>회사명</div>
                <input
                  type="text"
                  name="input_title"
                  value={input_title}
                  onChange={this._valueChangeHandler}
                />
              </div>

              <div>
                <div>담당자</div>
                <input
                  type="text"
                  name="input_manager"
                  value={input_manager}
                  onChange={this._valueChangeHandler}
                />
              </div>
              <div>
                <div>전화번호</div>
                <input
                  type="text"
                  name="input_mobile"
                  value={input_mobile}
                  onChange={this._valueChangeHandler}
                />
              </div>
              <div>
                <div>이메일</div>
                <input
                  type="text"
                  name="input_email"
                  value={input_email}
                  onChange={this._valueChangeHandler}
                />
                @
                <input
                  type="text"
                  name="input_email"
                  value={input_email}
                  onChange={this._valueChangeHandler}
                />
                .
                <select name="email_domain_value">
                  <option>직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="daum.net">daum.net</option>
                </select>
              </div>
              <div>
                <div>마케팅 및 제휴 문의</div>
                <input
                  type="text"
                  name="input_desc"
                  value={input_desc}
                  onChange={this._valueChangeHandler}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus color="primary">
                SAVE
              </Button>
            </DialogActions>
          </Dialog>
        </Fade>
      </div>
    );
  }
  _valueChangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;

    this.setState(nextState);
  };

  _isDialogOpenToggle = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen,
      // ! 는 부정 연산자
    });
  };
}

export default Footer;
