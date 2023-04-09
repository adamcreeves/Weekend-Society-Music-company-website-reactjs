import React from "react";
import { c_0032 } from "../../../resources/ClassNames";
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
} from "../../../resources/Strings";
import CocktailSection from "../subsections/CocktailSection";

function CocktailBody({
  sectionContainerClass,
  titleClass,
  subtitleTextClass,
  mainSectionClass,
  columnClass,
  videoContainerClass,
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
          <iframe
            className={c_0032}
            src={src_018}
            title="Cocktail video"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}

export default CocktailBody;
