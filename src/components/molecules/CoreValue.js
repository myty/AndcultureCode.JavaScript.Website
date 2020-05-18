import React from 'react';

const CoreValue = (props) => (
    <div className="m-core-value">
        <div className={`m-core-value__image ${props.image.space ? "-space" : ""}`}>
            <img
                aria-hidden = "true"
                src         = { props.image.src.childImageSharp.fluid.src }
                alt         = { props.image.description } />
        </div>
        <span>{ props.name}</span>
        <p>
            { props.description }
        </p>
    </div>
);

export default CoreValue;