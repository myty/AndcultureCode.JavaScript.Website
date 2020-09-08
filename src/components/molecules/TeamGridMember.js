import React, { Fragment, useEffect, useState } from "react";
import ExpandedTeamMember from "components/molecules/ExpandedTeamMember"

// Primary Component
// ------------------------------------

// TODO: add gradient to gray to bottom of each image (present in the invision comp)

const TeamGridMember = (props) => {

    const employee = props.employee;
    const [expanded, setExpanded] = useState(false);
    const onClick = () => setExpanded(!expanded);
    // In this commit this onClick isn't removeset so that we're able to merge in working code. will continue working on this onClick, which expands a specific team member. - Peter Stone 9/8/20

    return (
        <div onClick={onClick} className="team-grid-member">
            <img
                src={employee.teamGridPhoto.image.childImageSharp.fluid.src}
                alt={employee.teamGridPhoto.description}
            />
            {expanded ? <ExpandedTeamMember employee={employee} /> : null}
        </div>
    );
};

// Secondary Components
// ------------------------------------


// Exports
// ------------------------------------

export default TeamGridMember;
