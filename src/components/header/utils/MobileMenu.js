import React from "react";
import { Link } from "react-router-dom";
import { c_0063, c_0064, c_0065, c_0066 } from "../../../resources/ClassNames";
import {
  l_01,
  l_02,
  l_03,
  l_04,
  l_05,
  p_01,
  p_02,
  p_04,
  p_06,
  p_09,
} from "../../../resources/Strings";
import "../../../styling/components/header/utils/MobileMenu.css";

function MobileMenu({ id, count, mobileMenuOff, mobileMenuOn }) {
  return (
    <div
      id={id}
      className={c_0063}
      style={count === 0 ? mobileMenuOff : mobileMenuOn}
    >
      <Link to={p_01} className={c_0064}>
        <button className={c_0065}>
          <div className={c_0066}>{l_01}</div>
        </button>
      </Link>
      <Link to={p_06} className={c_0064}>
        <button className={c_0065}>
          <div className={c_0066}>{l_04}</div>
        </button>
      </Link>
      <Link to={p_09} className={c_0064}>
        <button className={c_0065}>
          <div className={c_0066}>{l_05}</div>
        </button>
      </Link>
      <Link to={p_02} className={c_0064}>
        <button className={c_0065}>
          <div className={c_0066}>{l_02}</div>
        </button>
      </Link>
      <Link to={p_04} className={c_0064}>
        <button className={c_0065}>
          <div className={c_0066}>{l_03}</div>
        </button>
      </Link>
    </div>
  );
}

export default MobileMenu;
