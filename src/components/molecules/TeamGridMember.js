import React, { Fragment } from "react";

// Primary Component
// ------------------------------------

const TeamGridMember = (props) => {
    let className = "";

    const employee = props.employee;

    return (
        <div className="">
            <img
                src={props.employee.teamGridPhoto.image.childImageSharp.fluid.src}
                alt={props.employee.teamGridPhoto.description}
            />
        </div>
    );
};

// Secondary Components
// ------------------------------------


// Exports
// ------------------------------------

export default TeamGridMember;
