import React, { useState, useEffect } from "react";
import TeamGridMember from "components/molecules/TeamGridMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandedTeamMemberContainer from "components/molecules/ExpandedTeamMemberContainer";
import ExpandTeamButton from "../atoms/ExpandTeamButton";

// Primary Component
// ------------------------------------

const TeamSlider = (props) => {
    const { data } = props;
    const settings = props.settings;
    const { edges: employees } = data.allMarkdownRemark;

    const [expandButtonIsHidden, setExpandButtonIsHidden] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [wasOpenedByKeyboard, setWasOpenedByKeyboard] = useState(false);
    let buttonElement = React.createRef();

    let className = "o-slider";

    useEffect(() => {
        if (props.isExpanded && wasOpenedByKeyboard) {
            setExpandButtonIsHidden(true);
        }
        if (!props.isExpanded && wasOpenedByKeyboard) {
            setExpandButtonIsHidden(false);
        }
        className = "o-slider";
        if (props.isExpanded) {
            className += " -is-expanded";
        }
    }, [props.isExpanded]);

    useEffect(() => {
        if (!props.isExpanded && wasOpenedByKeyboard) {
            buttonElement.current.focus();
            setWasOpenedByKeyboard(false);
        }
    }, [expandButtonIsHidden]);

    const handleExpand = (selectedEmployee) => {
        setSelectedEmployee(selectedEmployee);
        props.onExpand();
    };
    const handleExpandFromButton = () => {
        handleExpand(employees[0].node.frontmatter);
    }
    const handleCollapse = () => {
        props.onCollapse();
    };
    const handleOnFadedOut = () => {
        setSelectedEmployee(null);
    };

    let sliderItems = employees.map(({ node: teamMemberGridItem }, index) => {
        const employee = teamMemberGridItem.frontmatter;
        employee.index = index;

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
    if (sliderItems.length % 4 === 3) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
    } else if (sliderItems.length % 4 === 2) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 1]);
    } else if (sliderItems.length % 4 === 1) {
        sliderItems.push(sliderItems[sliderItemsMiddleIndex]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 1]);
        sliderItems.push(sliderItems[sliderItemsMiddleIndex + 2]);
    }

    let expandButtonClassName = expandButtonIsHidden ? "-hidden" : "";

    return (
        <div className="o-slider__container o-team">
            <div className="o-rhythm__container -full-width__mobile">
                <h2 className="people">meet the team</h2>
                <div className={className}>
                    <Slider {...settings}>{sliderItems}</Slider>
                    <ExpandedTeamMemberContainer
                        selectedEmployee={selectedEmployee}
                        employees={employees}
                        handleCollapse={handleCollapse}
                        isExpanded={props.isExpanded}
                        onFadedOut={handleOnFadedOut}
                        wasOpenedByKeyboard={wasOpenedByKeyboard}
                    />
                    <ExpandTeamButton
                        handleExpand={handleExpandFromButton}
                        className={expandButtonClassName}
                        setWasOpenedByKeyboard={setWasOpenedByKeyboard}
                        buttonRef={buttonElement}
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamSlider;
