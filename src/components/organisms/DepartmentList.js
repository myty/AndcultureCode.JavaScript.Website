import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Department from "components/molecules/Department";

const DepartmentList = (props) => {
  const { data } = props;
  const { edges: list } = data.allMarkdownRemark;
  let imgOnLeft = false;
  let modifier = "";

  return (
    <div className="">
      {list &&
        list.map(({ node: departmentItem }, index) => {
          imgOnLeft = !imgOnLeft;
          if (imgOnLeft) {
            modifier = " img-on-left"
          } else {
            modifier = ""
          }
          const department = departmentItem.frontmatter;

          return (
            <Department
              department = {department}
              modifier = {modifier}
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
                deptImg {
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
    render={(data, count) => <DepartmentList data={data} count={count} />}
  />
);
