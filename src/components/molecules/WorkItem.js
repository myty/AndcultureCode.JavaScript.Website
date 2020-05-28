import React, { Fragment } from 'react';

const WorkItem = (props) => {
    let className = "";

    if (!props.imageOnLeft) {
        className = "-right";
    }

    const post = props.post.frontmatter;

    return (
        <a
            aria-label = { `Read more about ${post.title}` }
            className  = {`o-rhythm__row m-work-item ${className}`}
            href       = { props.url }>
            {props.imageOnLeft &&
                <Fragment>
                    <WorkItemImage post = { post } />
                    <WorkItemDetails post = { post } />
                </Fragment>
            }

            {!props.imageOnLeft &&
                <Fragment>
                    <WorkItemDetails
                        className = "-tablet-and-desktop-only"
                        post      = { post } />
                    <WorkItemImage post = { post } />
                    <WorkItemDetails
                        className = "-phone-only"
                        post      = { post } />
                </Fragment>
            }
        </a>
    );
};


// Secondary Components
// ------------------------------------

const WorkItemDetails = (props) => (
    <div className={`m-work-item__details ${props.className ? props.className : ""}`}>
        <h2>{ props.post.partnerName }</h2>
        <h3><span>{ props.post.title }</span></h3>
    </div>
)

const WorkItemImage = (props) => (
    <div className="m-work-item__image">
        <img
            src       = { props.post.listImageArtwork.publicURL }
            alt       = {`${props.post.title}`}
            className = "client"
            data-sal  = "slide-up" />
        <img
            src         = { props.post.listImageFrame.publicURL }
            alt         = ""
            aria-hidden = "true"
            className   = "frame"
            data-sal    = "fade" />
    </div>
);


// Exports
// ------------------------------------

export default WorkItem;
