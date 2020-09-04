import React from "react";

const ExpandedTeamMember = (props) => {

  return (
    <div className="expanded-team-member">
      <div>
          <p>{ props.employee.name }*</p>
          <p>{ props.employee.position }</p>
          <p>{ props.employee.easterEgg }</p>
      </div>
      <div>
            <img
                src={ props.employee.teamExpandedPhoto.image.childImageSharp.fluid.src }
                alt={ props.employee.teamExpandedPhoto.description }
            />
      </div>
    </div>
  );
};

export default ExpandedTeamMember;
