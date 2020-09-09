import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import PrevArrow from "components/atoms/PrevArrow";
import NextArrow from "components/atoms/NextArrow";
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
  if (isLargeViewport()) {
    initialSlidesPerPage = 7;
  }

  const [slidesPerPage, setSlidesPerPage] = React.useState(initialSlidesPerPage);

  React.useEffect(() => {
    function handleResize() {
      if (isLargeViewport()) {
        setSlidesPerPage(7);
        return;
      }
      setSlidesPerPage(3);
    }
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <TeamSlider settings={settings} data={props.data} count={props.count}/>
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
        render={(data, count) => <TeamSliderContainer data={data} count={count} />}
    />
);
