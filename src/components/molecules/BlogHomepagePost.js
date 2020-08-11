import React from "react";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import postImgTemp from "../../../static/img/blog/blog_brewing_post.jpg";

const BlogHomepagePost = (props) => (
    <div className="m-blog-homepage">
        {/* <PreviewCompatibleImage imageInfo={("todo alt text", "", "../../../static/img/blog/blog_brewing_post.jpg")} /> */}
        <img
            alt={props.blogItem.frontmatter.tileImage.description}
            src={props.blogItem.frontmatter.tileImage.image.childImageSharp.fluid.src}
        />
        <h3 className="blog-category">{props.category}</h3>
        <a href={props.url}>{props.linkText}</a>
        <p className="blog-author">by {props.author}</p>
    </div>
);

export default BlogHomepagePost;
