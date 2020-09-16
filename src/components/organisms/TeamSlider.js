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
    }
    const handleHideExpanded = () => {
        props.onCollapse();
    }
    const handleOnFadedOut = () => {
        setEmployeeToShow(null);
    }

    const sliderItems = employees.map(({ node: teamMemberGridItem }, index) => {
        const employee = teamMemberGridItem.frontmatter;

        return <TeamGridMember employee={employee} key={`team-grid-member-${index}`} handleExpand={handleExpand} />;
    })

    return (
        <div className="o-slider__container o-team" aria-hidden="true">
            <div className="o-rhythm__container -full-width__mobile">
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
