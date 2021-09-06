import React from 'react';
import SectionTitle from './SectionTitle';
import { c_0089, c_0090, c_0091 } from '../../../resources/ClassNames';
import '../../../styling/components/services/sections/CocktailSection.css';

function CocktailSection({ sectionTitle, details }) {
    return (
        <div className={c_0089}>
            <div className={c_0090}>
                <SectionTitle title={sectionTitle} />
            </div>
            {details.split('\n').map((i, key) => {
                return <div className={c_0091} key={key}>{i}</div>
            })}
        </div>
    );
}

export default CocktailSection;
