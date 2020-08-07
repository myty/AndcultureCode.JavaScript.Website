import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Department from "components/molecules/Department";

const DepartmentList = (props) => {
  const { data } = props;
  const { edges: list } = data.allMarkdownRemark;

  return (
    <div className="">
      {list &&
        list.map(({ node: departmentItem }, index) => {
          const department = departmentItem.frontmatter;

          return (
          <Department
            name = { department.name }
            description = { department.description }
            rolesList = { department.rolesList }
            image = { department.deptImg }
          />
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
                rolesList
                deptImg
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DepartmentList data={data} count={count} />}
  />
);
