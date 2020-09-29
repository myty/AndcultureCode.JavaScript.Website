import React, { useState, useEffect } from "react";
import ExpandedTeamMember from "./ExpandedTeamMember";
import PrevArrow from "components/molecules/PrevArrow";
import NextArrow from "components/molecules/NextArrow";


const ExpandedTeamMemberContainer = (props) => {

    const employees = props.employees;
    const [selectedEmployee, setSelectedEmployee] = useState(props.selectedEmployee);

    useEffect(() => {
        setSelectedEmployee(props.selectedEmployee)
    }, [props.selectedEmployee]);

    const onClick = (direction) => {
        const increment = direction == "previous" ? -1 : 1;
        let newIndex = selectedEmployee.index + increment;
        if (newIndex >= employees.length) { newIndex = 0; }
        else if (newIndex <= 0) { newIndex = (employees.length - 1); }
        let newEmployee = employees[newIndex].node.frontmatter;
        newEmployee.index = newIndex;
        setSelectedEmployee(newEmployee);
    }

    return (
        <>
            <PrevArrow
                onClick={() => onClick("previous")}
                className="expanded-arrow expanded-arrow-prev"
            />
            <ExpandedTeamMember
                employee={selectedEmployee}
                handleHideExpanded={props.handleHideExpanded}
                isExpanded={props.isExpanded}
                onFadedOut={props.onFadedOut}
            />
            <NextArrow
                onClick={() => onClick("next")}
                className="expanded-arrow expanded-arrow-next"
            />
        </>
    );
};

export default ExpandedTeamMemberContainer;
