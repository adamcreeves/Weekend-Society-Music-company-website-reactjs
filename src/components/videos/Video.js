import React from "react";
import ReactPlayer from "react-player";
import { c_0030, c_0031, c_0032 } from "../../resources/ClassNames";
import "../../styling/components/videos/Video.css";

function Video({ title, url }) {
  return (
    <div className={c_0030}>
      {title !== "" ? <div className={c_0031}>{title}</div> : null}
      <ReactPlayer className={c_0032} url={url} />
    </div>
  );
}

export default Video;
