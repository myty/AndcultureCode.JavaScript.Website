import React from "react";

const ExpandTeamButton = (props) => {

    return (
        <button
            className={`btn-expand-team ${props.className}`}
            ref={props.buttonRef}
            onClick={() => props.handleExpand()}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    props.handleExpand();
                    props.setWasOpenedByKeyboard(true);
                    e.preventDefault();
                }
            }}>
            <span>Open Employee Details</span>
        </button>
    )
};

export default ExpandTeamButton;
