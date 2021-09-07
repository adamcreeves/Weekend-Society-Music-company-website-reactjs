import React from 'react'
import ReactPlayer from 'react-player';
import { 
    Cocktail, 
    CocktailQuartetDetails, 
    CocktailQuintetDetails, 
    CocktailSubtitle, 
    CocktailTrioDetails,
    CocktailVideoTitle, 
    Quartet, 
    Quintet, 
    src_018, 
    Trio } from '../../../resources/Strings';
import CocktailSection from '../subsections/CocktailSection';

function CocktailBody({ 
    sectionContainerClass, 
    titleClass, 
    subtitleTextClass,
    mainSectionClass, 
    columnClass,
    videoContainerClass,
    videoTitleClass,
    videoClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{Cocktail}</div>
            <div className={subtitleTextClass}>{CocktailSubtitle}</div>
            <div className={mainSectionClass}>
                <div className={columnClass}>
                    <CocktailSection 
                        sectionTitle={Trio} 
                        details={CocktailTrioDetails} />
                    <CocktailSection 
                        sectionTitle={Quartet} 
                        details={CocktailQuartetDetails} />
                    <CocktailSection 
                        sectionTitle={Quintet} 
                        details={CocktailQuintetDetails} />
                </div>
                <div className={videoContainerClass}>
                    <div className={videoTitleClass}>{CocktailVideoTitle}</div>
                    <ReactPlayer className={videoClass} url={src_018} />
                </div>
            </div>
        </div>
    );
}

export default CocktailBody;
