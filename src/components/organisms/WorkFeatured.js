import React from "react";
import { graphql, StaticQuery } from "gatsby";

const WorkFeatured = React.forwardRef((props, ref) => {
    const { data } = props;
    const { edges: list } = data.allMarkdownRemark;
    return (
        <>
            {list &&
                list.map(({ node: caseStudyItem }, index) => {
                    const caseStudy = caseStudyItem.frontmatter;
                    const slug = caseStudyItem.fields.slug;

                    return (
                        <div className="o-work-featured__container">
                            <div className="o-rhythm__container">
                                <div className = "o-work-featured__image-container">
                                    <img
                                        src={caseStudy.featuredimage.childImageSharp.fluid.src}
                                        alt=""
                                    />
                                </div>
                                <div className = "o-work-featured__content">
                                    <h2 className="featured-work-title">FEATURED WORK: {caseStudy.partnerName}</h2>
                                    <p>{caseStudy.title}</p>
                                    <a href={slug}>VIEW CASE STUDY</a>
                                    <a href="/work/">SEE ALL WORK</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
});

// Exports
// ------------------------------------

export default React.forwardRef((props, ref) => (
    <StaticQuery
        query={graphql`
            query WorkFeaturedQuery {
                allMarkdownRemark(
                    filter: { frontmatter: { templateKey: { eq: "case-studies" }, featuredpost: { eq: true } } }
                    sort: { order: DESC, fields: frontmatter___date }
                    limit: 1
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                author
                                featuredimage {
                                    #image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                              ...GatsbyImageSharpFluid
                                            }
                                        }
                                    #}
                                }
                                # featuredColor
                                partnerName
                                title
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => <WorkFeatured data={data} ref={ref} />}
    />
));
