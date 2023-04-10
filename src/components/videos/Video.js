import React from "react";
import { c_0030, c_0032 } from "../../resources/ClassNames";
import { s_001, s_115, s_116, s_118 } from "../../resources/Strings";
import "../../styling/components/videos/Video.css";

function Video({ title = s_118, url, classNm = s_001 }) {
  return (
    <div className={c_0030}>
      <iframe
        className={!!classNm ? classNm : c_0032}
        src={url}
        frameborder={s_115}
        allow={s_116}
        allowfullscreen
        title={title}
      />
    </div>
  );
}

export default Video;
