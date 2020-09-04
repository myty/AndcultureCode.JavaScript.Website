import React, { Fragment, useEffect, useState } from "react";
import ExpandedTeamMember from "components/molecules/ExpandedTeamMember"

// Primary Component
// ------------------------------------

const TeamGridMember = (props) => {

    const employee = props.employee;
    const [expanded, setExpanded] = useState(false);
    const onClick = () => setExpanded(!expanded);

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
