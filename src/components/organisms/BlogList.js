import React          from 'react';
import BlogPost       from "../molecules/BlogPost"
import imgStreamlines from '../../../static/img/blog/streamlines.png';


// Primary Component
// ------------------------------------

const BlogList = (props) => {
    return (
        <div className={`o-rhythm__row o-blog-list`}>
            <img src={ imgStreamlines } alt="Streamlines Artifact" className="o-blog-list__streamlines" />
            <BlogPost
                imageOnLeft = { false }
                tag         = "Engagement"
                title       = "what you should know before engaging with andculture" />
            <BlogPost
                imageOnLeft = { true }
                tag         = "Strategy"
                title       = "the risky business of delighting your users" />
            <BlogPost
                imageOnLeft = { false }
                tag         = "Engineering"
                title       = "brewing culture" />
            <BlogPost
                imageOnLeft = { true }
                tag         = "Strategy"
                title       = {`marketers, first ask: "Why do we want to do this?"`}/>
            <div className="o-blog-list__scroll">Scroll to load more posts</div>
        </div>
    );
};


// Secondary Components
// ------------------------------------




// Exports
// ------------------------------------

export default BlogList;