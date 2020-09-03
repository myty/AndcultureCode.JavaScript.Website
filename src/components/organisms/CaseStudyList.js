import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import CaseStudy from '../molecules/CaseStudy'

class CaseStudyList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const numberOfPosts = posts.length;

    return (
      <div className="o-case-study-list">
        {posts &&
          posts.map(({ node: post }, index) => (
            <CaseStudy
              key={index}
              post={post}
              count={index + 1}
              total={numberOfPosts} />
          ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudyListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-studies" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                color
                secondaryLayout
                texture {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                partnerName
                modifiedTexture
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                homeimage {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={
      (data, count) => <CaseStudyList data={data} count={count} />
    }
  />
)
