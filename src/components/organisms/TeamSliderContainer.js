import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import PrevArrow from "components/molecules/PrevArrow";
import NextArrow from "components/molecules/NextArrow";
import TeamSlider from "components/organisms/TeamSlider";

// Primary Component
// ------------------------------------

const TeamSliderContainer = (props) => {

  let initialSlidesPerPage = 3;

  function isLargeViewport() {
    if (typeof window !== `undefined`) {
      return window.matchMedia("(min-width: 769px)").matches;
    }
    return false;
  }


  const [slidesPerPage, setSlidesPerPage] = React.useState(initialSlidesPerPage);
  const [isExpanded, setIsExpanded] = React.useState(false);
  let isArrowDisabled = isExpanded;

  React.useEffect(() => {
    function handleResize() {
      if (isLargeViewport()) {
        setSlidesPerPage(7);
        return;
      }
      setSlidesPerPage(3);
    }
    handleResize();
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  let settings = {
    dots: true,
    draggable: true,
    infinite: true,
    speed: 500,
    rows: 4,
    slidesToShow: slidesPerPage,
    slidesToScroll: slidesPerPage,
    prevArrow: <PrevArrow isDisabled={isArrowDisabled} title="Slide team grid left" />,
    nextArrow: <NextArrow isDisabled={isArrowDisabled} title="Slide team grid right" />,
  };

  return (
    <TeamSlider
      settings={settings}
      data={props.data}
      count={props.count}
      onExpand={() => setIsExpanded(true)}
      onCollapse={() => setIsExpanded(false)}
      isExpanded={isExpanded}
    />
  );
};

// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
        query={graphql`
            query EmployeeListQuery {
                allMarkdownRemark(
                    filter: { frontmatter: { templateKey: { eq: "employee" }, position: { ne: null } } }
                    sort: { fields: [frontmatter___name], order: ASC }
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
        render={(data, count) => <TeamSliderContainer data={data} count={count} />}
    />
);
