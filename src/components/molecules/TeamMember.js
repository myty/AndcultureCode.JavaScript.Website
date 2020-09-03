import React, { Fragment } from "react";

// Primary Component
// ------------------------------------

const TeamMember = (props) => {
    let className = "";

    const employee = props.employee;

    return (
        <div className="">
            <p>{employee.name}*</p>
            <p>{employee.position}</p>
            <p>{employee.easterEgg}</p>
        </div>
    );
};

// Secondary Components
// ------------------------------------

const TeamMemberImage = (props) => (
    <div className="m-team-member__image">
        <img src={props.post.teamImage.image.childImageSharp.fluid.src} alt={props.post.teamImage.description} />
    </div>
);

// Exports
// ------------------------------------

export default TeamMember;
