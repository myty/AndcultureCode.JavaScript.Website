import React from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";

// TODO : fade in green overlay, animate the person's image expanding out to the larger view
//        for closing the expanded, maybe just fade out the overlay and images, maybe animate the expanded image going back to its smaller
//        parent but that might be overdoing the animations

const ExpandedTeamMember = (props) => {
    return (
        <div
            className="expanded-team-member"
            onClick={props.handleHideExpanded}>
            <div className="expanded-team-member-text">
                <p className="expanded-team-member-text-name">
                    {props.employee.name}{" "}
                    <img src={asteriskImg} alt="Asterisk" />
                </p>
                <p className="expanded-team-member-text-position">
                    {props.employee.position}
                </p>
                <p className="expanded-team-member-text-egg">
                    <img src={asteriskImg} alt="Asterisk" />{" "}
                    {props.employee.easterEgg}
                </p>
            </div>
            <div className="expanded-team-member-image">
                <img
                    src={
                        props.employee.teamExpandedPhoto.image.childImageSharp
                            .fluid.src
                    }
                    alt={props.employee.teamExpandedPhoto.description}
                />
            </div>
        </div>
    );
};

export default ExpandedTeamMember;
