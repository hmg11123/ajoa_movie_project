import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

class screen06 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div id="screen06" className="screen06 screen">
        <Fade bottom cascade>
          <div className="title">코로나 무비의 영화를 만나보세요</div>
          <ul className="content">
            <li>띵동! 영화개봉작을 알려드립니다!</li>
            <li>여러분들이 궁금해하는 영화들을</li>
            <li>다양한 분야로 보여드리겠습니다!</li>
          </ul>

          <div className="slick_slider">
            <Slider {...settings}>
              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://pds.joins.com/news/component/htmlphoto_mmdata/201704/06/adce9a2b-777a-416b-8835-1d898c7012ca.jpg" />
                  <div className="desc">아바타 2</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://lh3.googleusercontent.com/proxy/FOBQmG7gxu08i2J3xmGy16CTDs0j-Kk_WHKk5ceVpJmYXqCvEMsSMued8IBvUjdpHNC9dMO6kaqpHTFeMnH8aGj_M5Rqz3P4ZYSmKDtSitYE5ZU0FrjHnxu5p55yqR_HlQaa6OUIW1pMWAtXD7Fr6cRAPxNIuTMOxT1fThsmOqCNGOflmstTa8L4K-ekY8wlQfQjLHQaRp5qRxwYgM16Li2UE3PRkW4dB4MhbLxcApImEscJeugEXBD4FhesfgrZhmlX5Rrz7ATyXGwvT-iVhNtVVP64dV3hEP79" />
                  <div className="desc">콰이어트 플레이스</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="http://img.mediapen.com/news/201910/news_465777_1569888582_m.jpg" />
                  <div className="desc">킹스맨 3</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://img.hankyung.com/photo/202004/BF.22248407.1-1200x.jpg" />
                  <div className="desc">탑건 2</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://blog.kakaocdn.net/dn/kA4d1/btqCLdPFp0z/cBp3Ra5dpBkM2yUK7gjHp0/img.jpg" />
                  <div className="desc">베놈 2</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://post-phinf.pstatic.net/MjAyMDA4MTRfMjc5/MDAxNTk3MzcxMzE2OTYz.uxrelGcOlSsol1Iws7uISP829J9xs2sk0RD6825fz3cg.ZAaJrEo5oiKG2FL_ksWP1aaO-rlvb8aUEzJmBm05gBQg.JPEG/6.jpg?type=w800_q75" />
                  <div className="desc">미션임파서블 7</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://i.pinimg.com/originals/29/b3/ca/29b3ca6f92bcacabb8649b9fcc37ee5f.jpg" />
                  <div className="desc">모비우스</div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="https://post-phinf.pstatic.net/MjAxOTEwMjhfMjM0/MDAxNTcyMjU0MzYxNDQ3.VzAaUt_Ej9wsJLY2ay22Zi6xsGeTxh8Xgzd9En7PloMg.0ztm0_U0EGQnrNBezLNkmPwBFWc1P3GsHolb254Zokog.JPEG/0.jpg?type=w1200" />
                  <div className="desc">노타임 투 다이</div>
                </div>
              </div>
            </Slider>
          </div>
        </Fade>
      </div>
    );
  }
}

export default screen06;
