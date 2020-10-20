import React, { useState, useEffect } from "react";
import ExpandedTeamMember from "./ExpandedTeamMember";
import { gsap } from "gsap";
import NextArrow from "components/molecules/NextArrow";
import PrevArrow from "components/molecules/PrevArrow";

const ExpandedTeamMemberContainer = (props) => {
    const employees = props.employees;
    const [selectedEmployee, setSelectedEmployee] = useState(
        props.selectedEmployee
    );
    const [arrowDisplay, setArrowDisplay] = useState({ display: "none" });
    const [animationType, setAnimationType] = useState("initial");

    useEffect(() => {
        setSelectedEmployee(props.selectedEmployee);
        if (props.selectedEmployee != null) {
            setArrowDisplay({ display: "block" });
            return;
        }
        setArrowDisplay({ display: "none" });
        setAnimationType("initial");
    }, [props.selectedEmployee]);

    const onClick = (direction) => {
        setAnimationType("expanded-arrow");
        const newIndex = getNewIndex(direction);
        let newEmployee = employees[newIndex].node.frontmatter;
        newEmployee.index = newIndex;

        const imageDiv = document.querySelector(
            ".expanded-team-member-image-div"
        );
        const textDiv = document.querySelector(".expanded-team-member-text");

        if (direction === "next") {
            gsap.fromTo(
                [textDiv, imageDiv],
                { opacity: 1 },
                {
                    duration: 0.15,
                    opacity: 0,
                }
            );
            gsap.fromTo(
                [textDiv, imageDiv],
                { x: 0 },
                { duration: 0.25, x: -1000 }
            );
            setTimeout(() => setSelectedEmployee(newEmployee), 200);
            gsap.fromTo(
                [textDiv, imageDiv],
                { x: 2000, opacity: 0 },
                {
                    delay: 0.22,
                    duration: 0.5,
                    opacity: 1,
                    x: 0,
                }
            );
        } else if (direction === "previous") {
            let tl = gsap.timeline();
            tl.fromTo(
                [textDiv, imageDiv],
                { opacity: 1, x: 0 },
                {
                    duration: 0.5,
                    opacity: 0,
                    x: 1500,
                }
            );

            // Wait to change employee until invisible to user
            setTimeout(() => setSelectedEmployee(newEmployee), 450);

            tl.fromTo(
                [textDiv, imageDiv],
                { x: -1500, opacity: 0 },
                {
                    duration: 0.5,
                    opacity: 1,
                    x: 0,
                }
            );
        }
    };

    const getNewIndex = (direction) => {
        const increment = direction == "previous" ? -1 : 1;
        let newIndex = selectedEmployee.index + increment;
        if (newIndex >= employees.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = employees.length - 1;
        }
        return newIndex;
    }

    return (
        <>
            <PrevArrow
                onClick={() => onClick("previous")}
                className="expanded-arrow expanded-arrow-prev"
                style={arrowDisplay}
            />
            <ExpandedTeamMember
                animationType={animationType}
                employee={selectedEmployee}
                handleHideExpanded={props.handleHideExpanded}
                isExpanded={props.isExpanded}
                onFadedOut={props.onFadedOut}
            />
            <NextArrow
                onClick={() => onClick("next")}
                className="expanded-arrow expanded-arrow-next"
                style={arrowDisplay}
            />
        </>
    );
};

export default ExpandedTeamMemberContainer;
