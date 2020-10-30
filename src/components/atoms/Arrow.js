import React from "react";

export default function Arrow(props) {
    let { className, style, onClick, title } = props;

    if (props.isDisabled) {
        className += " -disabled";
    }

    return (
        <button
            href="#"
            className={className}
            style={{ ...style }}
            onClick={onClick}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 34.51 27.08">
                {props.children}
                <title>{title}</title>
            </svg>
        </button>
    );
}
