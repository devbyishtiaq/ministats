import * as React from "react";

function ArrowRight(props) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="chevron-right">
        <path
          id="Icon"
          d="M8 15L13 10L8 5"
          stroke={props.stroke}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default ArrowRight;
