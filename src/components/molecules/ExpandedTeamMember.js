import React, { useEffect } from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";
import { gsap, Linear } from "gsap";


// TODO : on expand have person's image grow to its full size
//        for closing the expanded, just fade out the overlay and images, current thought is animating the expanded image going back to its smaller
//        parent would be overdoing the animations

const ExpandedTeamMember = (props) => {

    useEffect(() => {
        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image");
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
            duration: 1.2,
        });
    })

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
            <div className="expanded-team-member-image">
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
