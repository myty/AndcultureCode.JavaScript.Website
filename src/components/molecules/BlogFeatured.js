import React                    from 'react';
import { graphql, StaticQuery } from 'gatsby'


// Primary Component
// ------------------------------------

const BlogFeatured = (props) => {
    const { data }         = props;
    const { edges: posts } = data.allMarkdownRemark;
    const postCount        = posts.length;
    let featuredPost       =  {};
    let featuredPostUrl    = "";

    if (postCount === 1) {
        featuredPost    = posts[0].node.frontmatter;
        featuredPostUrl = posts[0].node.fields.slug;
    }

    return (
        <a
            aria-label = { `Go to article ${featuredPost.title}` }
            className  = "m-blog-featured"
            href       = { featuredPostUrl }>
            <div className="m-blog-featured__image">
                <img
                    src = { featuredPost.featuredImage.image.childImageSharp.fluid.src }
                    alt = { featuredPost.featuredImage.description } />
            </div>
            <div className="m-blog-featured__title">
                <h1>{ featuredPost.title }</h1>
                <div className="m-blog-featured__title__author">
                    by { featuredPost.author }
                </div>
            </div>
        </a>
    );
};


// Exports
// ------------------------------------

export default () => (
    <StaticQuery
      query={graphql`
        query BlogFeaturedQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "blog-post"}, featured: {eq: true}}},
                sort: {order: DESC, fields: frontmatter___date},
                limit: 1
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            author
                            featuredImage {
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
      render = {
        (data, count) => <BlogFeatured data = { data } count = { count } />
      }
    />
  )