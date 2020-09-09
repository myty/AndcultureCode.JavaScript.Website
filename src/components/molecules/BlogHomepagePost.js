import React from "react";
import postImgTemp from "../../../static/img/blog/blog_brewing_post.jpg";

const BlogHomepagePost = (props) => (
    <div className="m-blog-homepage">]
        <img
            alt={props.blogItem.frontmatter.tileImage.description}
            src={props.blogItem.frontmatter.tileImage.image.childImageSharp.fluid.src}
        />
        <p className="blog-category">{props.category}</p>
        <a href={props.url}>{props.linkText}</a>
        <p className="blog-author">by {props.author}</p>
    </div>
);

export default BlogHomepagePost;
