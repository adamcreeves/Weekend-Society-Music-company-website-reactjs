import React from "react";
import { c_0030 } from "../../resources/ClassNames";
import "../../styling/components/videos/Video.css";

function HomeVideo({ title, url }) {
  return (
    <div className={c_0030}>
      <iframe
        className={"homeVideo__player"}
        src={url}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title={!!title && title}
      />
    </div>
  );
}

export default HomeVideo;
