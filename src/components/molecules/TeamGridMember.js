import React, { Fragment } from "react";
import ExpandedTeamMember from "components/molecules/ExpandedTeamMember"

// Primary Component
// ------------------------------------

// TODO: add gradient to gray to bottom of each image (present in the invision comp)

const TeamGridMember = (props) => {

    const employee = props.employee;
    const onClick = () => props.handleExpand(employee);

    return (
        <div onClick={onClick} className="team-grid-member">
            <img
                src={employee.teamGridPhoto.image.childImageSharp.fluid.src}
                alt={employee.teamGridPhoto.description}
            />
        </div>
    );
};

// Secondary Components
// ------------------------------------


// Exports
// ------------------------------------

export default TeamGridMember;
