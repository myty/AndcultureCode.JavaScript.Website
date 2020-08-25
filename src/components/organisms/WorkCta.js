import React from "react";
import squiggleImage from "../../../static/img/yellow-squiggle.png";

const WorkCta = (props) => (
    <div className="o-work-cta__container">
        <div className="o-rhythm__container">
            <div className="o-work-cta__wrapper">
                <div className="o-work-cta__content-container">
                    <h2>
                        We’re looking for partners who want to reimagine the future and boldly disrupt the status quo.
                    </h2>
                    <a href="/contact/">LET'S TALK</a>
                </div>
                <div className="o-work-cta__image-container">
                    <img src={squiggleImage} alt="Abstract yellow squiggle" />
                </div>
            </div>
        </div>
    </div>
);

export default WorkCta;
