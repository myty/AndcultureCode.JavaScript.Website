import React from 'react';
import Slider from "react-slick";
import sliderImage1 from '../../../static/img/contact/slider/Contact_1.jpg';
import sliderImage2 from '../../../static/img/contact/slider/Contact_2.jpg';
import sliderImage3 from '../../../static/img/contact/slider/Contact_3.jpg';
import sliderImage4 from '../../../static/img/contact/slider/Contact_4.jpg';
import sliderImage5 from '../../../static/img/contact/slider/Contact_5.jpg';
import sliderImage6 from '../../../static/img/contact/slider/Contact_6.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const ContactSlider = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "-slider">
            <div className="o-rhythm__container">
              <Slider {...settings}>
                <div>
                  <img src = { sliderImage1 } />
                </div>
                <div>
                  <img src = { sliderImage2 } />
                </div>
                <div>
                  <img src = { sliderImage3 } />
                </div>
                <div>
                  <img src = { sliderImage4 } />
                </div>
                <div>
                  <img src = { sliderImage5 } />
                </div>
                <div>
                  <img src = { sliderImage6 } />
                </div>
              </Slider>
            </div>
          </div>
        )
    }
}

export default ContactSlider