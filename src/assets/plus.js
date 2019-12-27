import React from "react";
const SVG = ({width, height, className}) => (
  <svg
    // fill={fill} 
    width={width}
    height={height} 
    viewBox={"0 0 357 357"}
    x="0px" y="0px"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
    <g id="add">
		<path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/>
	</g></g>
  </svg>
);
export default SVG;
