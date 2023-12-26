import * as React from "react";

function PlayIcon(props) {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="130" height="130" rx="65" fill="white" />
      <path
        d="M81.5 58.0718C86.8333 61.151 89.5 62.6906 89.5 65C89.5 67.3094 86.8333 68.849 81.5 71.9282L60.5 84.0526C55.1667 87.1318 52.5 88.6714 50.5 87.5167C48.5 86.362 48.5 83.2828 48.5 77.1244L48.5 52.8757C48.5 46.7173 48.5 43.6381 50.5 42.4834C52.5 41.3287 55.1667 42.8683 60.5 45.9475L81.5 58.0718Z"
        fill="#FEBD02"
      />
    </svg>
  );
}

export default PlayIcon;
