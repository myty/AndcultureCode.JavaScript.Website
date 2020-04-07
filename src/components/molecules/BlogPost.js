import React, { Fragment } from 'react';
import { Link }            from 'gatsby';


// Primary Component
// ------------------------------------

const BlogPost = (props) => {
    let className = "";

    if (!props.imageOnLeft) {
        className = "-right";
    }

    const post = props.post;

    return (
        <article
            className = {`o-rhythm__row m-blog-post ${className}`}
            style     = {{zIndex: props.zIndex}}>
            {props.imageOnLeft &&
                <Fragment>
                    <img
                        src         = "/img/blog/grey_lines_right.png"
                        alt         = "Grey Squiggle Lines"
                        className   = "m-blog-post__squiggle"
                        area-hidden = "true" />
                    <BlogPostImage post = { post } />
                    <div className="m-blog-post__details">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                            <a
                                aria-label = { `Read more about ${post.title}` }
                                href       = { props.url }>Read More</a>
                        </div>
                    </div>
                </Fragment>
            }

            {!props.imageOnLeft &&
                <Fragment>
                    <img 
                        src         = "/img/blog/grey_lines_left.png"
                        alt         = "Grey Squiggle Lines"
                        className   = "m-blog-post__squiggle"
                        area-hidden = "true" />
                    <div className="m-blog-post__details -tablet-and-desktop-only">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                            <a
                                aria-label = { `Read more about ${post.title}` }
                                href       = { props.url }>Read More</a>
                        </div>
                    </div>
                    <BlogPostImage post = { post } />
                    <div className="m-blog-post__details -phone-only">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                            <a
                                aria-label = { `Read more about ${post.title}` }
                                href       = { props.url }>Read More</a>
                        </div>
                    </div>
                </Fragment>
            }
        </article>
    );
};


// Secondary Components
// ------------------------------------

const BlogPostImage = (props) => (
    <div className="m-blog-post__image">
        <img
            src = { props.post.tileImage.image.childImageSharp.fluid.src }
            alt = { props.post.tileImage.description } />
    </div>
);


// Exports
// ------------------------------------

export default BlogPost;