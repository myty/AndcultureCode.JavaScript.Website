import React from 'react';

const Career = (props) => (
    <div className="m-career">
        <span className="m-career__title">{ props.title }</span>
        <p className="m-career__description">
            { props.description }
        </p>
        <p className="m-career__actions">
            <a
                aria-label = {`Apply for the ${props.title} position`}
                href       = {props.applicationUrl}
                target     = "_blank">apply for this position</a>
            <a
                aria-label = {`Read more about the ${props.title} position`}
                href       = { props.url }>read more</a>
        </p>
    </div>
);

export default Career;