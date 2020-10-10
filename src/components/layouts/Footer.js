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
      memoData: null,
      isDialogOpen: false,

      input_title: "",
      input_desc: "",
    };
  }
  render() {
    const { memoData, isDialogOpen, input_title, input_desc } = this.state;
    return (
      <div className="footer">
        <Fade bottom cascade>
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
              <div className="footer2__title">영화 광고 문의는 은진이에게</div>
              <div className="footer__txt">
                주지마세요
                <input
                  type="button"
                  value="광고문의"
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
              <p className="footer4_line"></p>
              <p>
                <span>PL : 홍민기</span>
                <span>UA : 정예림,오은하,정은진</span>
                <span>TA : 오은하,정은진</span>
                <span>AA : 정예림,오은하,정은진</span>
              </p>
              <p>
                <span>주소 : 충청남도 공주시 금학동 250-6</span>
                <span>대표번호 : 010-4496-2415</span>
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
            fullWidth={true}
            maxWidth={"md"}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={this._isDialogOpenToggle}
            >
              REGISTER MEMO
            </DialogTitle>
            <DialogContent>
              <div>
                <div>제목</div>
                <input
                  type="text"
                  name="input_title"
                  value={input_title}
                  onChange={this._valueChangeHandler}
                />
              </div>

              <div>
                <div>내용</div>
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
