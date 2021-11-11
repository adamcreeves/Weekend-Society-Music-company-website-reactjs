import React from "react";
import ReactPlayer from "react-player";
import {
  src_018,
  s_098,
  s_102,
  s_103,
  s_104,
  s_105,
  s_106,
  s_107,
  s_108,
  s_109,
} from "../../../resources/Strings";
import CocktailSection from "../subsections/CocktailSection";

function CocktailBody({
  sectionContainerClass,
  titleClass,
  subtitleTextClass,
  mainSectionClass,
  columnClass,
  videoContainerClass,
  videoTitleClass,
  videoClass,
}) {
  return (
    <div className={sectionContainerClass}>
      <div className={titleClass}>{s_102}</div>
      <div className={subtitleTextClass}>{s_103}</div>
      <div className={mainSectionClass}>
        <div className={columnClass}>
          <CocktailSection sectionTitle={s_098} details={s_104} />
          <CocktailSection sectionTitle={s_105} details={s_106} />
          <CocktailSection sectionTitle={s_107} details={s_108} />
        </div>
        <div className={videoContainerClass}>
          <div className={videoTitleClass}>{s_109}</div>
          <ReactPlayer className={videoClass} url={src_018} />
        </div>
      </div>
    </div>
  );
}

export default CocktailBody;
