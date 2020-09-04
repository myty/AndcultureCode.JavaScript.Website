import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "components/atoms/PrevArrow";
import NextArrow from "components/atoms/NextArrow";

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