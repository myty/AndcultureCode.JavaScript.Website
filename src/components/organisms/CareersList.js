import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import CareerPosition from '../molecules/CareerPosition'

class CareersList extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        const numberOfPosts = posts.length;

        return (
          <div className = "m-careers__container">
            <div className = "o-rhythm__container">
              <div className = "m-careers">
                <h6 className = "-secondary">Careers</h6>
                <div className = "o-rhythm__row">
                  <div className = "m-careers__left">
                    <h2>join the team</h2>
                  </div>
                  <div className = "m-careers__right">
                    {posts &&
                      posts.map(({ node: post }, index) => (
                        <CareerPosition
                          key   = { index }
                          post  = { post }
                          count = { index + 1 }
                          total = { numberOfPosts } />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}

export default () => (
    <StaticQuery
      query={graphql`
        query CareersListQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "careers" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  position
                  link
                  templateKey
                }
              }
            }
          }
        }
      `}
      render = {
        (data, count) => <CareersList data = { data } count = { count } />
      }
    />
  )