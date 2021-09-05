import React from 'react';
import CeremonyBody from './sections/CeremonyBody';
import '../../styling/components/services/ServicesBody.css';
import CocktailBody from './sections/CocktailBody';
import ReceptionBody from './sections/ReceptionBody';

function ServicesBody() {
    return (
        <div className='services__container'>
            <ReceptionBody 
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                mainSectionClass={'services__mainSection'}
                mainSectionId={'mainSection1'}
                columnClass={'services__mainSectionColumn'}
                imageClass={'services__mainSectionImage'} />
            <CocktailBody
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                underTitleTextClass={'services__titleUnderText'}
                mainSectionClass={'services__mainSectionCocktail'}
                columnClass={'services__mainSectionCocktailColumn'}
                videoContainerClass={'videos__video'}
                videoTitleClass={'videoTitle'}
                videoClass={'video'} />
            <CeremonyBody 
                sectionContainerClass={'services__sectionContainer'}
                titleClass={'services__title'}
                mainSectionClass={'services__mainSectionCeremony'}
                rowClass={'services__mainSectionCeremonyRow'}
                columnClass={'services__mainSectionCeremonyColumn'} />
        </div>
    );
}

export default ServicesBody;
