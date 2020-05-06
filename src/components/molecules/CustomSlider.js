import React from 'react';
import Slider from "react-slick";
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
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
    onSwipe:        function() {
        const pullIcon = document.querySelector('.pull-icon');
        if (pullIcon) {
            pullIcon.remove();
        }
    }
  };

const CustomSlider = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sliderItems = this.props.images.map((imageObject, index) =>
            <img key = { index } src = { imageObject.image } alt = { imageObject.alt } />
        );

        return (
            <div className = "o-slider__container" aria-hidden = "true">
                <div className = "o-rhythm__container -full-width__mobile">
                    <div className = "o-slider">
                        <Slider {...settings}>
                            { sliderItems }
                        </Slider>
                    </div>
                </div>
                <div className = "pull-icon">Pull<span></span></div>
            </div>
        )
    }
}

export default CustomSlider;