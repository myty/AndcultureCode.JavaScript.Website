import React from 'react';


// Primary Component
// ------------------------------------

const BlogPost = (props) => {
    let className = "";

    if (!props.imageOnLeft) {
        className = "-right";
    }

    return (
        <article className={`o-rhythm__row m-blog-post ${className}`}>
            {props.imageOnLeft &&
                <BlogPostImage />
            }
            <div className="m-blog-post__details">
                <div className="m-blog-post__details__wrapper">
                    <h5>{ props.tag }</h5>
                    <p>{ props.title }</p>
                </div>
            </div>
            {!props.imageOnLeft &&
                <BlogPostImage />
            }
        </article>
    );
};


// Secondary Components
// ------------------------------------

const BlogPostImage = (props) => (
    <div className="m-blog-post__image">
        <img src="https://via.placeholder.com/685x547/2AB2C1/ffffff" alt="Placeholder Image" />
    </div>
);


// Exports
// ------------------------------------

export default BlogPost;