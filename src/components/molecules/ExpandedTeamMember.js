import React, { useEffect } from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";
import { gsap, Power4 } from "gsap";
import closeButton from "./../../../static/img/close-button.png";
import Img from "gatsby-image";

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

const calculateFinalImagePosValue = () => {
    const windowWidth = window.innerWidth;
    let position = {
        left: "41%",
        top: "19%"
    };
    switch (true) {
        case (windowWidth > 1801):
            return position;
        case (windowWidth > 1451):
            position.left = "46%";
            return position;
        case (windowWidth > 1251):
            position.left = "51%";
            return position;
        case (windowWidth > 941):
            position.left = "51%";
            position.top = "21%";
            return position;
        case (windowWidth > 769):
            position.left = "54%";
            position.top = "21%";
            return position;
        default:
            return {left: 0, top: 0};
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
        const finalImagePosValue = calculateFinalImagePosValue();


        gsap.to(parentDiv, {
            background: "rgba(25,168,124,0.8)",
            duration: 0.25,
        });

        gsap.to(textDiv, {
            duration: 0.5,
            opacity: 1,
        });

        gsap.to(imageDiv, {
            duration: 1,
            ease: Power4.easeIn,
            left: finalImagePosValue.left,
            opacity: 1,
            top: finalImagePosValue.top,
        });

        gsap.to(image, {
            duration: 1,
            ease: Power4.easeIn,
            width: finalImageWidth,
        });
    }, [props.employee]);

    useEffect(() => {
        // fades out the expanded team member view
        if (props.isExpanded == true) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");

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
                <Img
                    alt={props.employee.teamExpandedPhoto.description}
                    className="expanded-team-member-image"
                    durationFadeIn={50}
                    fluid={
                        props.employee.teamExpandedPhoto.image.childImageSharp
                            .fluid
                    } 
                    loading="eager"
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
