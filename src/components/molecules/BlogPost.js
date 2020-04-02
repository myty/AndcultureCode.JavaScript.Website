import React, { Fragment } from 'react';


// Primary Component
// ------------------------------------

const BlogPost = (props) => {
    let className = "";

    if (!props.imageOnLeft) {
        className = "-right";
    }

    const post = props.post;

    return (
        <article className={`o-rhythm__row m-blog-post ${className}`}>
            {props.imageOnLeft &&
                <Fragment>
                    <div className="m-blog-post__details -mobile-only">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                        </div>
                    </div>
                    <BlogPostImage post = { post } />
                    <div className="m-blog-post__details -desktop-only">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                        </div>
                    </div>
                </Fragment>
            }

            {!props.imageOnLeft &&
                <Fragment>
                    <div className="m-blog-post__details">
                        <div className="m-blog-post__details__wrapper">
                            <h5>{ post.category }</h5>
                            <p>{ post.title }</p>
                        </div>
                    </div>
                    <BlogPostImage post = { post } />
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