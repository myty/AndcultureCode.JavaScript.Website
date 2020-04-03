import React from 'react';


// Primary Component
// ------------------------------------

const BlogFeatured = (props) => {
    return (
        <div className="m-blog-featured">
            <img src="/img/blog/blog_featured_image.jpg" alt="welcome to the new andculture" />
            <div className="o-rhythm__container">
                <div className="o-rhythm__row">
                    <div className="m-blog-featured__title">
                        <h1>welcome to the new andculture</h1>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Exports
// ------------------------------------

export default BlogFeatured;