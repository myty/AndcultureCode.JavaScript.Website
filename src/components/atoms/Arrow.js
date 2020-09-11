import React from "react";

export default function Arrow(props) {
    let { className, style, onClick } = props;

    if (props.isDisabled) {
        className += " -disabled";
    }
    return (
        <a
            href="#"
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 34.51 27.08">
                {props.children}
            </svg>
        </a>
    );
}
