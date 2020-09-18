import React, { useEffect } from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";
import { gsap } from "gsap";
import closeButton from "./../../../static/img/close-button.png";

const calculateFinalImageWidth = () => {
    const windowWidth = window.innerWidth;
    switch (true) {
        case (windowWidth > 1451):
            return 349;
        case (windowWidth > 1181):
            return 303;
        case (windowWidth > 941):
            return 239;
        case (windowWidth > 769):
            return 172;
        case (windowWidth > 601):
            return 429;
        case (windowWidth > 481):
            return 340;
        default:
            return 162;
    }
}

const calculateFinalImageLeftValue = () => {
    const windowWidth = window.innerWidth;
    switch (true) {
        case (windowWidth > 1801):
            return "41%";
        case (windowWidth > 1451):
            return "46%";
        case (windowWidth > 941):
            return "51%";
        case (windowWidth > 769):
            return "54%";
        default:
            return "0%";
    }
}

const ExpandedTeamMember = (props) => {
    useEffect(() => {
        // fades in the expanded team member view
        if (props.employee == null) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");
        const image = document.querySelector(".expanded-team-member-image");

        const finalImageWidth = calculateFinalImageWidth();
        const finalImageLeftValue = calculateFinalImageLeftValue();


        gsap.to(parentDiv, {
            background: "rgba(25,168,124,0.8)",
            duration: 0.25,
        });

        gsap.to(textDiv, {
            opacity: 1,
            duration: 0.5,
        });

        gsap.to(imageDiv, {
            left: finalImageLeftValue,
            opacity: 1,
            duration: 0.5,
        });

        gsap.to(image, {
            width: finalImageWidth,
            duration: 0.5,
        })
    }, [props.employee]);

    useEffect(() => {
        // fades out the expanded team member view
        if (props.isExpanded == true) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");
        const image = document.querySelector(".expanded-team-member-image");


        if (parentDiv !== null) {
            gsap.to(parentDiv, {
                background: "rgba(25,168,124,0.0)",
                duration: 0.5,
                onComplete: () => props.onFadedOut(),
            });
        }

        if (textDiv !== null) {
            gsap.to(textDiv, {
                opacity: 0,
                duration: 0.25,
            });
        }

        if (imageDiv !== null) {
            gsap.to(imageDiv, {
                opacity: 0,
                duration: 0.25,
            });
        }
    }, [props.isExpanded]);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            props.handleHideExpanded()
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    className="expanded-team-member-image"
                    src={
                        props.employee.teamExpandedPhoto.image.childImageSharp
                            .fluid.src
                    }
                    alt={props.employee.teamExpandedPhoto.description}
                />
                <img
                    className="expanded-team-member-close-button"
                    src={closeButton}
                    alt="close button"
                />
            </div>
        </div>
    );
};

export default ExpandedTeamMember;
