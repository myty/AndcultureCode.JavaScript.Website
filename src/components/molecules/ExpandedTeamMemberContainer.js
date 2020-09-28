import React from "react";
// import { gsap, Power4 } from "gsap";
import ExpandedTeamMember from "./ExpandedTeamMember";


const ExpandedTeamMemberContainer = (props) => {

    return (
        <ExpandedTeamMember
            employee={props.selectedEmployee}
            handleHideExpanded={props.handleHideExpanded}
            isExpanded={props.isExpanded}
            onFadedOut={props.onFadedOut}
        />
    );
};

export default ExpandedTeamMemberContainer;
