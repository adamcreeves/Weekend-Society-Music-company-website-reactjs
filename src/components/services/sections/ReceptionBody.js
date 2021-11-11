import React from "react";
import ReceptionSection from "../subsections/ReceptionSection";
import ForAllSignatureInfo from "../subsections/ForAllSignatureInfo";
import {
  alt_012,
  src_037,
  s_069,
  s_070,
  s_071,
  s_072,
  s_073,
  s_074,
  s_075,
  s_076,
  s_077,
  s_078,
  s_079,
  s_080,
  s_081,
} from "../../../resources/Strings";

function ReceptionBody({
  sectionContainerClass,
  titleClass,
  mainSectionClass,
  mainSectionId,
  columnClass,
  imageClass,
}) {
  return (
    <div className={sectionContainerClass}>
      <div className={titleClass}>{s_069}</div>
      <div id={mainSectionId} className={mainSectionClass}>
        <div className={columnClass}>
          <ReceptionSection
            sectionTitle={s_070}
            detail1={s_071}
            detail2={s_072}
            detail3={s_073}
          />
          <ReceptionSection
            sectionTitle={s_074}
            detail1={s_075}
            detail2={s_076}
            detail3={s_077}
          />
          <ReceptionSection
            sectionTitle={s_078}
            detail1={s_079}
            detail2={s_080}
            detail3={s_081}
          />
        </div>
        <div className={columnClass}>
          <img className={imageClass} src={src_037} alt={alt_012} />
        </div>
      </div>
      <ForAllSignatureInfo />
    </div>
  );
}

export default ReceptionBody;
