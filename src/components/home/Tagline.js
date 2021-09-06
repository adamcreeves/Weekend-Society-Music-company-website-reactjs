import React from 'react';
import { c_0077, c_0078, c_0079, c_0080, c_0081 } from '../../resources/ClassNames';
import { 
    HomeTagline1, 
    HomeTagline2, 
    HomeTagline3, 
    Welcome } from '../../resources/Strings';
import '../../styling/components/home/Tagline.css';

function Tagline () {
    return (
        <div className={c_0077}>
            <div className={c_0078}>{Welcome}</div>
            <div className={c_0079}>
                <div className={c_0080}>{HomeTagline1}</div>
                <div className={c_0080}>{HomeTagline2}</div>
                <div className={c_0081}>{HomeTagline3}</div>
            </div>
        </div>
    );
}

export default Tagline;
