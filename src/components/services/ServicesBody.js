import React, { useState, useEffect } from "react";
import ReceptionBody from "./sections/ReceptionBody";
import CocktailBody from "./sections/CocktailBody";
import CeremonyBody from "./sections/CeremonyBody";
import { id_02 } from "../../resources/Strings";
import {
  c_0020,
  c_0099,
  c_0100,
  c_0101,
  c_0102,
  c_0103,
  c_0104,
  c_0105,
  c_0106,
  c_0107,
  c_0110,
  c_0111,
  c_0112,
  c_0121,
} from "../../resources/ClassNames";
import "../../styling/components/services/ServicesBody.css";
import LoadingSpinner from "../subcomponents/LoadingSpinner";
import { int_02 } from "../../resources/Integers";

function ServicesBody() {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, int_02);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={c_0020}>
      {loaderVisible ? (
        <LoadingSpinner isVisible={loaderVisible} />
      ) : (
        <div className={c_0020}>
          <ReceptionBody
            sectionContainerClass={c_0099}
            titleClass={c_0100}
            mainSectionClass={c_0101}
            mainSectionId={id_02}
            columnClass={c_0102}
            imageClass={c_0103}
          />
          <CocktailBody
            sectionContainerClass={c_0121}
            titleClass={c_0100}
            subtitleTextClass={c_0104}
            mainSectionClass={c_0105}
            columnClass={c_0106}
            videoContainerClass={c_0107}
          />
          <CeremonyBody
            sectionContainerClass={c_0099}
            titleClass={c_0100}
            mainSectionClass={c_0110}
            rowClass={c_0111}
            columnClass={c_0112}
          />
        </div>
      )}
    </div>
  );
}

export default ServicesBody;
