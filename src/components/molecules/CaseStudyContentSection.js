import React from 'react';

const CaseStudyContentSection = (props) => (
    <div className = "o-rhythm__container">
        <div className = {`m-case-study-page-content__copy-section ${props.sectionClassName}`}>
            <h6 className = "content__header -mobile-only">{ props.header }</h6>
            <header className = "-push-three">{ props.title }</header>
            <div className = "o-rhythm__row">
                <h6 className = "content__header -desktop-only">{ props.header }</h6>
                <div className = "content__copy">
                    { props.children }
                </div>
            </div>
        </div>
    </div>
);

export default CaseStudyContentSection;