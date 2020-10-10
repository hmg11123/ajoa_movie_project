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
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>

              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
                </div>
              </div>
              
              <div className="slick__box">
                <div className="slick__box-content">
                  <img src="/" />
                  <div className="desc"></div>
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
