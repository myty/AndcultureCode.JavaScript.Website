import React from 'react';

const CaseStudyBodyIntro = (props) => (
    <div className = "o-rhythm__container">
        <div className = "m-case-study-page-content__copy-section -body-intro">
            <header>{ props.title }</header>
            <div className = "o-rhythm__row">
                <div className = "content__copy">
                    <p><span className = "easter-egg__right">{ props.copyEasterEgg }</span> { props.copy }</p>
                </div>
                <div className = "content__easter-egg easter-egg">{ props.easterEgg }</div>
            </div>
        </div>
    </div>
);

export default CaseStudyBodyIntro;