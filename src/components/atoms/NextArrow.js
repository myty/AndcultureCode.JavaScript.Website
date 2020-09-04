import React from "react";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34.51 27.08"
      >
        <path
          d="M20.99,0.83l12.33,12.33c0.14,0.11,0.14,0.34,0,0.48L20.99,25.97c-0.14,0.14-0.34,0.14-0.48,0l-1.59-1.59
                l9.72-9.72H2.08c-0.77,0-1.39-0.62-1.39-1.39l0,0c0-0.74,0.62-1.36,1.39-1.36h26.33l-9.5-9.5l1.59-1.59
                C20.65,0.69,20.85,0.69,20.99,0.83L20.99,0.83z"
        />
      </svg>
    </div>
  );
}
