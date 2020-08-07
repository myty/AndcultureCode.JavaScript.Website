import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import Perk from "components/molecules/Perk";

const DepartmentList = (props) => {
  const { data } = props;
  const { edges: list } = data.allMarkdownRemark;

  return (
    <div className="">
      {list &&
        list.map(({ node: departmentItem }, index) => {
          const department = departmentItem.frontmatter;

          return (
          <>
            <p>{department.name}</p>
            <p>{department.description}</p>
          </>
          );
        })}
    </div>
  );
};

// Exports
// ------------------------------------

export default (props) => (
  <StaticQuery
    query={graphql`
      query DepartmentListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "department" } } }
          sort: { order: ASC, fields: frontmatter___priority }
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
    render={(data, count) => <DepartmentList data={data} count={count} />}
  />
);
