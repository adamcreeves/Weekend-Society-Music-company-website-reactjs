import React from "react";
import { c_0045, c_0046 } from "../../../resources/ClassNames";
import { src_013, s_026 } from "../../../resources/Strings";
import "../../../styling/components/footer/utils/FooterButton.css";

function FooterButton() {
  return (
    <button className={c_0045}>
      <a href={src_013} className={c_0046}>
        {s_026}
      </a>
    </button>
  );
}

export default FooterButton;
