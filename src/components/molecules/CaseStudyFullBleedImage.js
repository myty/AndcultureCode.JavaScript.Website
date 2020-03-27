import React from 'react';

const CaseStudyFullBleedImage = (props) => (
    <div className="m-case-study-page-content__image">
        <img src = { props.image } alt = { props.altText } />
    </div>
);

export default CaseStudyFullBleedImage;