import React    from 'react';
import BlogPost from "../molecules/BlogPost"


// Primary Component
// ------------------------------------

const BlogList = (props) => {
    return (
        <div className={`o-rhythm__row o-blog-list`}>
            <BlogPost
                imageOnLeft = { false }
                tag         = "Engagement"
                title       = "what you should know before engaging with andculture" />
            <BlogPost
                imageOnLeft = { true }
                tag         = "Strategy"
                title       = "the risky business of delighting your users" />
        </div>
    );
};


// Secondary Components
// ------------------------------------




// Exports
// ------------------------------------

export default BlogList;