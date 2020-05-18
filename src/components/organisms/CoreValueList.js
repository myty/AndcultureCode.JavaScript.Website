import React                    from 'react';
import { graphql, StaticQuery } from 'gatsby'
import CoreValue                from "components/molecules/CoreValue"


const CoreValueList = (props) => {
    const { data }        = props;
    const { edges: list } = data.allMarkdownRemark;

    return (
        <div className="o-core-value-list o-rhythm__row">
            {list &&
                list.map(({ node: value }, index) => {
                    const coreValue = value.frontmatter;

                    return (
                        <CoreValue
                          description = { coreValue.description }
                          image       = { coreValue.image }
                          key         = { `CoreValue-${index}` }
                          name        = { coreValue.name } />
                    );
                })
            }
        </div>
    );
};

// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
      query={graphql`
        query CoreValueListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "core-value"}}},
                sort: {order: ASC, fields: frontmatter___priority}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      name
                      description
                      image {
                        description
                        src {
                            childImageSharp {
                                fluid(maxWidth: 1920, quality: 100) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        space
                      }
                    }
                  }
                }
             }
          }
      `}
      render = {
        (data, count) =>
          <CoreValueList
            data      = { data }
            count     = { count } />
      }
    />
  )