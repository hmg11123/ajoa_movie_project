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
    );
  }
}

export default screen06;
