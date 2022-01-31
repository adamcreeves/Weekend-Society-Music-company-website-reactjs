import React from "react";
import {
  alt_009,
  alt_011,
  alt_016,
  src_010,
  src_011,
  src_040,
  src_041,
} from "../../../resources/Strings";
import ImageRow from "../../images/ImageRow";
import Pledge from "./Pledge";
import WhatsOffered from "./WhatsOffered";
import { c_0073 } from "../../../resources/ClassNames";
import "../../../styling/components/home/sections/HomeBottom.css";
import SongListButton from "./SongListButton";
import ImageButton from "../utils/ImageButton";
import { int_05 } from "../../../resources/Integers";

function HomeBottom() {
  const divStyle = {
    display: "inline-block",
    fontSize: "10px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "20px",
  };
  const imgStyle = {
    margin: 0,
    display: "block",
  };
  return (
    <div className={c_0073}>
      <WhatsOffered />
      <ImageRow
        source1={src_010}
        source2={src_011}
        alt1={alt_011}
        alt2={alt_009}
      />
      <Pledge />
      <ImageButton
        href={src_040}
        divStyle={divStyle}
        imgStyle={imgStyle}
        imgSrc={src_041}
        imgWidth={int_05}
        imgHeight={int_05}
        imgAlt={alt_016}
      />
      <SongListButton />
    </div>
  );
}

export default HomeBottom;
