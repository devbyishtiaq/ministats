import * as React from "react";

function ToggleIcon(props) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="menu-04">
        <path
          id="Icon"
          d="M3.5 12H21.5M3.5 6H21.5M9.5 18H21.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default ToggleIcon;
