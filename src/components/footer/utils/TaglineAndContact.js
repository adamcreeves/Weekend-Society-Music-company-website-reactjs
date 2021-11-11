import React from "react";
import {
  src_012,
  src_013,
  src_035,
  src_036,
  s_025,
} from "../../../resources/Strings";
import ContactMethod from "../../contact/ContactMethod";
import { c_0052, c_0053, c_0054, c_0055 } from "../../../resources/ClassNames";
import "../../../styling/components/footer/utils/TaglineAndContact.css";

function TaglineAndContact() {
  return (
    <div className={c_0052}>
      <div className={c_0053}>{s_025}</div>
      <ContactMethod
        methodClass={c_0054}
        linkClass={c_0055}
        source={src_012}
        text={src_035}
      />
      <ContactMethod
        methodClass={c_0054}
        linkClass={c_0055}
        source={src_013}
        text={src_036}
      />
    </div>
  );
}

export default TaglineAndContact;
