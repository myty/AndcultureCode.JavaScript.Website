import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BlogHomepagePost from "../molecules/BlogHomepagePost";

const FromOurBlog = React.forwardRef((props, ref) => {
    const { data } = props;
    const { edges: list } = data.allMarkdownRemark;
    return (
        <div className="o-from-our-blog__container">
            <div className="o-rhythm__container">
                <div className="o-from-our-blog__wrapper">
                    <div className="from-our-blog">
                        <h2>from our blog</h2>
                        <div>
                            <a href="/blog/" className="view-all-posts">
                                VIEW ALL POSTS
                            </a>
                        </div>
                    </div>
                    <div className="blog-list-homepage">
                        {list &&
                            list.map(({ node: blogItem }, index) => {
                                const blog = blogItem.frontmatter;
                                const slug = blogItem.fields.slug;

                                return (
                                    <BlogHomepagePost
                                        key={`blog-homepage-post-${index}`}
                                        url={slug}
                                        linkText={blog.title}
                                        author={blog.author}
                                        category={blog.category}
                                        blogItem={blogItem}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
});

// Exports
// ------------------------------------

export default React.forwardRef((props, ref) => (
    <StaticQuery
        query={graphql`
            query FromOurBlogQuery {
                allMarkdownRemark(
                    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                    sort: { order: DESC, fields: frontmatter___date }
                    limit: 3
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                author
                                category
                                tileImage {
                                    description
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                }
                                title
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => <FromOurBlog data={data} ref={ref} />}
    />
));
