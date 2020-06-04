import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Client from "components/molecules/Client"

const _chunkArray = (array, size) => {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}

const ClientList = (props) => {
  const { data } = props;
  const { edges: list } = data.allMarkdownRemark;
  const columns = _chunkArray(list, 4);

  return (
    <div className="o-client-list o-rhythm__row">
      {columns.map((list, i) => (
        <div className="o-client-list__column">
          {list.map(({ node: clientItem }, index) => (
            <Client
              key={`Client-${index}`}
              logo={clientItem.frontmatter.logo}
              name={clientItem.frontmatter.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Exports
// ------------------------------------

export default (props) => (
  <StaticQuery
    query={graphql`
        query ClientListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "client"}}},
                sort: {order: ASC, fields: frontmatter___priority}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      name
                      logo {
                        description
                        image {
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
          }
      `}
    render={
      (data, count) =>
        <ClientList
          data={data}
          count={count} />
    }
  />
)