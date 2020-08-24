import React from "react";
import ampersandImage from "../../../static/img/home-about-sticker.jpg"

const LearnAboutUs = (props) => (
    <div className="o-learn-about-us__container">
        <div className="o-rhythm__container">
            <div className="o-learn-about-us__wrapper">
                <div className="o-learn-about-us__content-container">
                    <h2>
                        Confident enough to not capitalize our name. Passionate about solving broken realities by looking at
                        all angles. It's real business value delivered through a human-centered lens.
                    </h2>
                    <a href="/about/">LEARN ABOUT US</a>
                </div>
                <div className="o-learn-about-us__image-container">
                    <img src={ampersandImage}
                    alt="" />
                </div>                
            </div>
        </div>
    </div>
);

export default LearnAboutUs;
