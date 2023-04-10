import React from "react";
import { Link } from "react-router-dom";
import { c_0119, c_0120 } from "../../../resources/ClassNames";
import { p_10, s_114 } from "../../../resources/Strings";
import "../../../styling/components/home/sections/SongListButton.css";

function SongListButton() {
  return (
    <Link to={p_10} className={c_0119}>
      <div className={c_0120}>{s_114}</div>
    </Link>
  );
}

export default SongListButton;
