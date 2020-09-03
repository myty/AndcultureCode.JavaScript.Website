import React from "react";
import { graphql, StaticQuery } from "gatsby";

// Primary Component
// ------------------------------------

const Team = (props) => {
    const { data } = props;
    // const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className={`o-rhythm__row o-team`}>
            {posts &&
                posts.map(({ node: post }, index) => {
                    //const blogPost = post.frontmatter;

                    // return <TeamMember image={null} key={`team-member-${index}`} />;
                    return null;
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
                employees: allMarkdownRemark(
                    filter: { frontmatter: { createPage: { eq: false }, templateKey: { eq: "employee" } } }
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
                                teamPhoto {
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
        render={(data, count) => <Team data={data} count={count} />}
    />
);
