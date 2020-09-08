import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import TeamGridMember from "components/molecules/TeamGridMember";
import PrevArrow from "components/atoms/PrevArrow";
import NextArrow from "components/atoms/NextArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandedTeamMember from "components/molecules/ExpandedTeamMember";

// Primary Component
// ------------------------------------

const settings = {
    dots:           true,
    draggable:      true,
    infinite:       true,
    speed:          500,
    rows:           4,
    slidesToShow:   7,
    slidesToScroll: 7,
    prevArrow:      <PrevArrow />,
    nextArrow:      <NextArrow />,
    onSwipe:        function() {
        const pullIcon = document.querySelector('.pull-icon');
        if (pullIcon) {
            pullIcon.remove();
        }
    }
};

const TeamSlider = (props) => {

    const { data } = props;
    const { edges: employees } = data.allMarkdownRemark;
    const [expanded, setExpanded] = useState(false);
    const [employeeToShow, setEmployeeToShow] = useState(null);
    const handleExpand = (employeeToShow) => {
        setEmployeeToShow(employeeToShow);
        setExpanded(true);
    }
    const handleHideExpanded = () => {
        setExpanded(false);
    }
    const sliderItems = employees.map(({ node: teamMemberGridItem }, index) => {
        const employee = teamMemberGridItem.frontmatter;

        return <TeamGridMember employee={employee} key={`team-grid-member-${index}`} handleExpand={handleExpand} />;
    })
    return (
        <div className = "o-slider__container o-team" aria-hidden = "true">
            <div className = "o-rhythm__container -full-width__mobile">
                <div className = "o-slider">
                    <Slider {...settings}>
                        { sliderItems }
                    </Slider>
                    {expanded ? <ExpandedTeamMember employee={employeeToShow} handleHideExpanded={handleHideExpanded} /> : null}
                </div>
            </div>
        </div>
    );
};

// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
        query={graphql`
            query EmployeeListQuery {
                allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "employee" }, position: { ne: null } } }) {
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
                                teamGridPhoto {
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    description
                                }
                                teamExpandedPhoto {
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    description
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <TeamSlider data={data} count={count} />}
    />
);
