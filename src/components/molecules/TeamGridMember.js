import React, { Fragment } from "react";
import Img from "gatsby-image";

// Primary Component
// ------------------------------------

const TeamGridMember = (props) => {
    const employee = props.employee;
    const onClick = () => props.handleExpand(employee);

    return (
        <div onClick={onClick} className="team-grid-member">
            <Img
                fluid={employee.teamGridPhoto.image.childImageSharp.fluid}
                alt={employee.teamGridPhoto.description}
            />
            <div className="gradient"></div>
        </div>
    );
};

// Exports
// ------------------------------------

export default TeamGridMember;
