import React from 'react';
import { c_0074, c_0075, c_0076 } from '../../../resources/ClassNames';
import { 
    PledgeTitle1, 
    PledgeTitle2, 
    PledgeLine1, 
    PledgeLine2, 
    PledgeLine3, 
    PledgeLine4, 
    PledgeLine5, 
    PledgeLine6, 
    PledgeLine7, 
    PledgeLine8, 
    PledgeLine9,
    PledgeLine10 } from '../../../resources/Strings';
import '../../../styling/components/home/Pledge.css';

function Pledge() {
    return (
        <div className={c_0074}>
            <div className={c_0075}>{PledgeTitle1}<br />{PledgeTitle2}</div>
            <div className={c_0076}>
                {PledgeLine1}<br />
                {PledgeLine2}<br />
                {PledgeLine3}<br />
                {PledgeLine4}<br />
                {PledgeLine5}<br />
                {PledgeLine6}<br /><br /> 
                {PledgeLine7}<br />
                {PledgeLine8}<br />
                {PledgeLine9}<br />
                {PledgeLine10}<br />
            </div>
        </div>
    );
}

export default Pledge;
