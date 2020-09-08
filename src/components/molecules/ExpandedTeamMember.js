import React from "react";

// TODO : fade in green overlay, animate the person's image expanding out to the larger view
//        for closing the expanded, maybe just fade out the overlay and images, maybe animate the expanded image going back to its smaller
//        parent but that might be overdoing the animations


const ExpandedTeamMember = (props) => {

  return (
    <div className="expanded-team-member">
      <div className="expanded-team-member-text">
          <p>{ props.employee.name }*</p>
          <p>{ props.employee.position }</p>
          <p>{ props.employee.easterEgg }</p>
      </div>
      <div className="expanded-team-member-image">
            <img
                src={ props.employee.teamExpandedPhoto.image.childImageSharp.fluid.src }
                alt={ props.employee.teamExpandedPhoto.description }
            />
      </div>
    </div>
  );
};

export default ExpandedTeamMember;
