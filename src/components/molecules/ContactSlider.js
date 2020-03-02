import React from 'react';
import Slider from "react-slick";
import sliderImage1 from '../../../static/img/contact/slider/river_room.png';
import sliderImage2 from '../../../static/img/contact/slider/Contact_1.jpg';
import sliderImage3 from '../../../static/img/contact/slider/Contact_2.jpg';
import sliderImage4 from '../../../static/img/contact/slider/Contact_3.jpg';
import sliderImage5 from '../../../static/img/contact/slider/Contact_4.jpg';
import sliderImage6 from '../../../static/img/contact/slider/Contact_5.jpg';
import sliderImage7 from '../../../static/img/contact/slider/Contact_6.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className   = {className}
            style       = {{ ...style, display: "block"}}
            onClick     = {onClick}
        >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 34.51 27.08">
                <path d="M13.13,25.97L0.8,13.64c-0.14-0.11-0.14-0.34,0-0.48L13.13,0.83c0.14-0.14,0.34-0.14,0.48,0l1.59,1.59
                    l-9.72,9.72h26.56c0.77,0,1.39,0.62,1.39,1.39l0,0c0,0.74-0.62,1.36-1.39,1.36H5.7l9.5,9.5l-1.59,1.59
                    C13.47,26.12,13.27,26.12,13.13,25.97L13.13,25.97z"/>
            </svg>
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className   = {className}
            style       = {{ ...style, display: "block"}}
            onClick     = {onClick}
        >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 34.51 27.08">
            <path d="M20.99,0.83l12.33,12.33c0.14,0.11,0.14,0.34,0,0.48L20.99,25.97c-0.14,0.14-0.34,0.14-0.48,0l-1.59-1.59
                l9.72-9.72H2.08c-0.77,0-1.39-0.62-1.39-1.39l0,0c0-0.74,0.62-1.36,1.39-1.36h26.33l-9.5-9.5l1.59-1.59
                C20.65,0.69,20.85,0.69,20.99,0.83L20.99,0.83z"/>
            </svg>
        </div>
    );
}

const settings = {
    dots:           true,
    draggable:      true,
    infinite:       true,
    speed:          500,
    slidesToShow:   1,
    slidesToScroll: 1,
    prevArrow:      <PrevArrow />,
    nextArrow:      <NextArrow />,
  };

const ContactSlider = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "-slider__container">
                <div className = "-slider">
                    <div className = "o-rhythm__container">
                        <Slider {...settings}>
                            <img src = { sliderImage1 } />
                            <img src = { sliderImage2 } />
                            <img src = { sliderImage3 } />
                            <img src = { sliderImage4 } />
                            <img src = { sliderImage5 } />
                            <img src = { sliderImage6 } />
                            <img src = { sliderImage7 } />
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSlider