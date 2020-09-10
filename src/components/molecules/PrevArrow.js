import React from "react";
import Arrow from "components/atoms/Arrow";

export default function PrevArrow(props) {
  return (
    <Arrow {...props}>
      <path
        d="M13.13,25.97L0.8,13.64c-0.14-0.11-0.14-0.34,0-0.48L13.13,0.83c0.14-0.14,0.34-0.14,0.48,0l1.59,1.59
                  l-9.72,9.72h26.56c0.77,0,1.39,0.62,1.39,1.39l0,0c0,0.74-0.62,1.36-1.39,1.36H5.7l9.5,9.5l-1.59,1.59
                  C13.47,26.12,13.27,26.12,13.13,25.97L13.13,25.97z"
      />
    </Arrow>
  );
}
