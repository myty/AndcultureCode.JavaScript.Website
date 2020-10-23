import React from "react";

const ExpandTeamButton = (props) => {



    return (
        <button
            className={`btn-expand-team ${props.className}`}
            onClick={() => props.handleExpand()}
            onKeyDown={(e) => {
                if (e.keyCode === 13) {
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
