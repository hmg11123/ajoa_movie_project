import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class screen06 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };
    return (
      <div className="screen06 screen">
        <div className="title">코로나 무비의 영화를 만나보세요</div>
        <ul className="content">
          <li>뽜밤! 영화가 상영됩니다!</li>
          <li>여러분에 추천하는 영화들을</li>
          <li>다양한 분야로 보여드리겠습니다</li>
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
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen06;
