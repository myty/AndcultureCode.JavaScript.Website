import React from "react";
import { graphql, StaticQuery } from "gatsby";
import TeamMember from "components/molecules/TeamMember";

// Primary Component
// ------------------------------------

const Team = (props) => {
    const { data } = props;
    const { edges: employees } = data.allMarkdownRemark;

    return (
        <div className={`o-rhythm__row o-team`}>
            {employees &&
                employees.map(({ node: teamMemberItem }, index) => {
                    const employee = teamMemberItem.frontmatter;

                    return <TeamMember employee={employee} image={null} key={`team-member-${index}`} />;
                })}
        </div>
    );
};

// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
        query={graphql`
            query EmployeeListQuery {
                allMarkdownRemark(
                    filter: { frontmatter: { templateKey: { eq: "employee" } } }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                position
                                name
                                easterEgg
                                socialLinks {
                                    platform
                                    url
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <Team data={data} count={count} />}
    />
);

// teamPhoto {
//     description
//     image {
//         childImageSharp {
//             fluid(maxWidth: 1920, quality: 100) {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// }
