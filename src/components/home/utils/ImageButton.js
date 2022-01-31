import React from "react";
import { int_03 } from "../../../resources/Integers";
import { t_07, t_08 } from "../../../resources/Strings";

function ImageButton({
  href,
  divStyle,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  imgStyle,
}) {
  return (
    <a target={t_07} href={href} rel={t_08}>
      <div style={divStyle}>
        <img
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          border={int_03}
          style={imgStyle}
        />
      </div>
    </a>
  );
}

export default ImageButton;
