import React from 'react'
import ReactPlayer from 'react-player';
import CocktailSection from '../subsections/CocktailSection';

function CocktailBody ({ 
    sectionContainerClass, 
    titleClass, 
    underTitleTextClass,
    mainSectionClass, 
    columnClass,
    videoContainerClass,
    videoTitleClass,
    videoClass }) {
    return (
        <div className={sectionContainerClass}>
            <div className={titleClass}>{'Cocktail'}</div>
            <div className={underTitleTextClass}>{'(Named after some of our favorite cocktails)'}</div>
            <div className={mainSectionClass}>
                <div className={columnClass}>
                    <CocktailSection 
                        sectionTitle={'Trio'} 
                        details={'• Old-Fashioned - Keys, Drums, & Saxophone \n • Penecillin - Saxophone, Drums, & Upright Bass \n • Sazerac - Guitar, Drums, & Saxophone \n • Manhattan - Keys, Guitar, & Drums'} />
                    <CocktailSection 
                        sectionTitle={'Quartet'} 
                        details={'• Classic Martini - Keys, Upright Bass, Saxophone, & Drums \n • Gimlet - Keys, Upright Bass, Trumpet, & Drums \n • Gin & Tonic - Guitar, Upright Bass, Keys, & Drums \n • Bramble - Guitar, Upright Bass, Saxophone, & Drums'} />
                    <CocktailSection 
                        sectionTitle={'Quintet'} 
                        details={'• Margarita - Keys, Upright Bass, Saxophone, Trumpet, & Drums \n • Paloma - Guitar, Keys, Upright Bass, Saxophone, & Drums \n • Infante - Keys, Guitar, Upright Bass, Drums, & Male or Female Vocalist \n • Night Crawler - Guitar, Upright Bass, Trumpet, Saxophone, & Drums'} />
                </div>
                <div className={videoContainerClass}>
                    <div className={videoTitleClass}>{'Cocktail Hour (Blue Bossa)'}</div>
                    <ReactPlayer className={videoClass} url='https://vimeo.com/569581619' />
                </div>
            </div>
        </div>
    );
}

export default CocktailBody;
