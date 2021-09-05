import React from 'react';
import SectionTitle from '../SectionTitle';
import '../../../styling/components/services/sections/CocktailSection.css';

function CocktailSection ({ sectionTitle, details }) {
    return (
        <div className='cocktailSection'>
            <div className='cocktailSection__titleContainer'>
                <SectionTitle title={sectionTitle} />
            </div>
            {details.split('\n').map((i, key) => {
                return <div className='cocktailSection__details' key={key}>{i}</div>
            })}
        </div>
    );
}

export default CocktailSection;
