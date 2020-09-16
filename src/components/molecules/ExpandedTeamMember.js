import React, { useEffect } from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";
import { gsap } from "gsap";


// TODO : on expand have person's image grow to its full size

const ExpandedTeamMember = (props) => {

    useEffect(() => { // fades in the expanded team member view
        if (props.employee == null) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");

        gsap.to(parentDiv, {
            background: 'rgba(25,168,124,0.8)',
            duration: .5
        });
        gsap.to(textDiv, {
            opacity: 1,
            duration: 1.2
        });
        gsap.to(imageDiv, {
            opacity: 1,
            duration: 1.4,
        });
    }, [props.employee])

    useEffect(() => { // fades out the expanded team member view
        if (props.isExpanded == true) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");

        gsap.to(parentDiv, {
            background: "rgba(25,168,124,0.0)",
            duration: 1,
            onComplete:() => props.onFadedOut()
        });
        gsap.to(textDiv, {
            opacity: 0,
            duration: 0.5,
        });
        gsap.to(imageDiv, {
            opacity: 0,
            duration: 0.5,
        });
    }, [props.isExpanded])

    // If no employee is selected, don't render this component:
    if (props.employee == null) {
        return null;
    }

    return (
        <div
            className="expanded-team-member"
            onClick={props.handleHideExpanded}>
            <div className="expanded-team-member-text">
                <p className="expanded-team-member-text-name">
                    {props.employee.name}{" "}
                    <sup>
                        <img src={asteriskImg} alt="Asterisk" />
                    </sup>
                </p>
                <p className="expanded-team-member-text-position">
                    {props.employee.position}
                </p>
                <p className="expanded-team-member-text-egg">
                    <img src={asteriskImg} alt="Asterisk" />{" "}
                    {props.employee.easterEgg}
                </p>
            </div>
            <div className="expanded-team-member-image-div">
                <img
                    src={
                        props.employee.teamExpandedPhoto.image.childImageSharp
                            .fluid.src
                    }
                    alt={props.employee.teamExpandedPhoto.description}
                />
                <span>x</span>
            </div>
        </div>
    );
};

export default ExpandedTeamMember;
