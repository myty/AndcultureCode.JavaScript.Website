import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Career from 'components/molecules/Career';


const CareerList = (props) => {
  const { data } = props;
  const { edges: list } = data.allMarkdownRemark;

  return (
    <>
      <div className="p-careers__positions__join o-rhythm__row">
        <h3>{props.heading}</h3>
        {list.length === 0 &&
          <p>
            {props.children}
          </p>
        }
      </div>
      <div className="o-career-list o-rhythm__row">
        {
          list.map(({ node: careerItem }, index) => {
            const career = careerItem.frontmatter;
            const slug = careerItem.fields.slug;

            return (
              <Career
                applicationUrl={career.applicationUrl}
                description={career.description}
                key={`Career-${index}`}
                title={career.title}
                url={slug} />
            );
          })
        }
      </div>
      {list.length > 0 &&
        <div className="p-careers__positions__text o-rhythm__row">
          {list.length > 0 &&
            <p>
              {props.children}
            </p>
          }
        </div>
      }
    </>
  );
};

// Exports
// ------------------------------------

export default (props) => (
  <StaticQuery
    query={graphql`
        query CareerListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "careers-detail-page"}, active: {eq: true}}},
                sort: {order: ASC, fields: frontmatter___title}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      description
                      applicationUrl
                    }
                    fields {
                      slug
                    }
                  }
                }
             }
          }
      `}
    render={
      (data, count) =>
        <CareerList
          data={data}
          count={count}
          heading={props.heading}>{props.children}</CareerList>
    }
  />
)