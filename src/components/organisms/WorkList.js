import React                    from 'react'
import { graphql, StaticQuery } from 'gatsby'
import WorkItem                 from 'components/molecules/WorkItem'

class WorkList extends React.Component {
  render() {
    const { data }         = this.props
    const { edges: posts } = data.allMarkdownRemark
    const numberOfPosts    = posts.length;

    return (
      <div className = "o-work-list">
        {posts &&
          posts.map(({ node: post }, index) => (
            <WorkItem
              count       = { index + 1 }
              imageOnLeft = { (index + 1) % 2 === 0 }
              key         = { index }
              post        = { post }
              total       = { numberOfPosts }
              url         = { post.fields.slug } />
          ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___listOrder] }
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
                texture
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
                listImageArtwork {
                  publicURL
                }
                listImageFrame {
                  publicURL
                }
                listOrder
              }
            }
          }
        }
      }
    `}
    render = {
      (data, count) =>
        <WorkList
          data  = { data }
          count = { count } />
    }
  />
)
