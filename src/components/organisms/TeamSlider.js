import React from "react";
import { graphql, StaticQuery } from "gatsby";
import TeamGridMember from "components/molecules/TeamGridMember";
import PrevArrow from "components/atoms/PrevArrow";
import NextArrow from "components/atoms/NextArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Primary Component
// ------------------------------------

const settings = {
    dots:           true,
    draggable:      true,
    infinite:       true,
    speed:          500,
    rows:           3,
    slidesToShow:   7,
    slidesToScroll: 1,
    prevArrow:      <PrevArrow />,
    nextArrow:      <NextArrow />,
    onSwipe:        function() {
        const pullIcon = document.querySelector('.pull-icon');
        if (pullIcon) {
            pullIcon.remove();
        }
    }
};

const TeamSlider = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const { edges: employees } = data.allMarkdownRemark;
        const sliderItems = employees.map(({ node: teamMemberGridItem }, index) => {
            const employee = teamMemberGridItem.frontmatter;

            return <TeamGridMember employee={employee} key={`team-grid-member-${index}`} />;
        })
        return (
            <div className = "o-slider__container" aria-hidden = "true">
                <div className = "o-rhythm__container -full-width__mobile">
                    <div className = "o-slider">
                        <Slider {...settings}>
                            { sliderItems }
                        </Slider>
                    </div>
                </div>
                <div className = "pull-icon">Pull<span></span></div>
            </div>
        )
    };
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
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <TeamSlider data={data} count={count} />}
    />
);
