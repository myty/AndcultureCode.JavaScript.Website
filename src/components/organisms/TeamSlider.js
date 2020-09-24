import React, { useState } from "react";
import TeamGridMember from "components/molecules/TeamGridMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandedTeamMember from "components/molecules/ExpandedTeamMember";

// Primary Component
// ------------------------------------

const TeamSlider = (props) => {
    const { data } = props;
    const settings = props.settings;
    const { edges: employees } = data.allMarkdownRemark;

    let className = "o-slider";
    if (props.isExpanded) {
        className += " -is-expanded";
    }

    const [employeeToShow, setEmployeeToShow] = useState(null);

    const handleExpand = (employeeToShow) => {
        setEmployeeToShow(employeeToShow);
        props.onExpand();
    };
    const handleHideExpanded = () => {
        props.onCollapse();
    };
    const handleOnFadedOut = () => {
        setEmployeeToShow(null);
    };

    let sliderItems = employees.map(({ node: teamMemberGridItem }, index) => {
        const employee = teamMemberGridItem.frontmatter;

        return (
            <TeamGridMember
                employee={employee}
                key={`team-grid-member-${index}`}
                handleExpand={handleExpand}
            />
        );
    });

    // Add in duplicate employees to end of list as necessary to fill in empty gaps.
    const sliderItemsMiddleIndex = Math.floor(sliderItems.length / 2);
    // TODO Investigate further, this is duplicating react "key" props but it is not causing an error / issue
    if (sliderItems.length % 4 == 3) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
    } else if (sliderItems.length % 4 == 2) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 1]);
    } else if (sliderItems.length % 4 == 1) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 1]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 2]);
    }

    return (
        <div className="o-slider__container o-team" aria-hidden="true">
            <div className="o-rhythm__container -full-width__mobile">
                <h2 className="people">meet the team</h2>
                <div className={className}>
                    <Slider {...settings}>{sliderItems}</Slider>
                    <ExpandedTeamMember
                        employee={employeeToShow}
                        handleHideExpanded={handleHideExpanded}
                        isExpanded={props.isExpanded}
                        onFadedOut={handleOnFadedOut}
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamSlider;
