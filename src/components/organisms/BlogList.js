import React                    from 'react';
import BlogPost                 from "../molecules/BlogPost"
import imgStreamlines           from '../../../static/img/blog/streamlines.png';
import { graphql, StaticQuery } from 'gatsby'


// Primary Component
// ------------------------------------

const BlogList = (props) => {
    const { data }         = props;
    const { edges: posts } = data.allMarkdownRemark;
    const postCount        = posts.length;

    return (
        <div className={`o-rhythm__row o-blog-list`}>
            {postCount >= 2 &&
                <img src={ imgStreamlines } alt="Streamlines Artifact" className="o-blog-list__streamlines" />
            }
            {posts &&
                posts.map(({ node: post }, index) => {
                    const blogPost = post.frontmatter;

                    return (
                        <BlogPost
                            imageOnLeft = { (index + 1) % 2 === 0 }
                            key         = { `blog-post-${index}` }
                            post        = { blogPost } />
                    );
                })
            }
            {postCount > 4 &&
                <div className="o-blog-list__scroll">Scroll to load more posts</div>
            }
        </div>
    );
};


// Secondary Components
// ------------------------------------




// Exports
// ------------------------------------

export default () => (
    <StaticQuery
      query={graphql`
        query BlogListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "blog-post"}, featured: {eq: false}}},
                sort: {order: DESC, fields: frontmatter___date}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      templateKey
                      title
                      headline
                      date
                      featured
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
                      postImage {
                        description
                        image {
                          childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                      seo {
                        metaDescription
                        metaTitle
                      }
                      category
                      featuredColor
                      body
                      author
                    }
                  }
                }
             }
          }
      `}
      render = {
        (data, count) => <BlogList data = { data } count = { count } />
      }
    />
  )