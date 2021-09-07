import React from 'react';
import { Link } from "react-router-dom";
import { c_0059, c_0060, c_0061, c_0062 } from '../../../resources/ClassNames';
import {  
    l_01,
    l_02,
    l_03,
    l_04,
    l_05,
    p_01, 
    p_02, 
    p_04, 
    p_06, 
    p_09 } from '../../../resources/Strings';
import "../../../styling/components/header/utils/HeaderLinks.css";

function HeaderLinks() {
    return (
        <div className={c_0059}>
            <Link to={p_01} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{l_01}</h3>
                </button>
            </Link>
            <Link to={p_06} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{l_04}</h3>
                </button>
            </Link>
            <Link to={p_09} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{l_05}</h3>
                </button>
            </Link>
            <Link to={p_02} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{l_02}</h3>
                </button>
            </Link>
            <Link to={p_04} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{l_03}</h3>
                </button>
            </Link>
        </div>
    );
}


export default HeaderLinks;