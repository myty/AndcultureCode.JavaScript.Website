import React                    from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Perk                     from "components/molecules/Perk"


const PerkList = (props) => {
    const { data }        = props;
    const { edges: list } = data.allMarkdownRemark;

    return (
        <div className="o-perk-list o-rhythm__row">
            {list &&
                list.map(({ node: perkItem }, index) => {
                    const perk = perkItem.frontmatter;

                    return (
                        <Perk
                          description = { perk.description }
                          key         = { `Perk-${index}` }
                          name        = { perk.name } />
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
        query PerkListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "perk"}}},
                sort: {order: ASC, fields: frontmatter___priority}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      name
                      description
                    }
                  }
                }
             }
          }
      `}
      render = {
        (data, count) =>
          <PerkList
            data      = { data }
            count     = { count } />
      }
    />
  )