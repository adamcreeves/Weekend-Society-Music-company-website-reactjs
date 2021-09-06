import React from 'react';
import { Link } from "react-router-dom";
import { c_0059, c_0060, c_0061, c_0062 } from '../../../resources/ClassNames';
import { 
    About, 
    aboutPath, 
    Contact, 
    contactPath, 
    Home, 
    homePath, 
    Services, 
    servicesPath, 
    Videos, 
    videosPath } from '../../../resources/Strings';
import "../../../styling/components/header/utils/HeaderLinks.css";

function HeaderLinks() {
    return (
        <div className={c_0059}>
            <Link to={homePath} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{Home}</h3>
                </button>
            </Link>
            <Link to={servicesPath} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{Services}</h3>
                </button>
            </Link>
            <Link to={videosPath} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{Videos}</h3>
                </button>
            </Link>
            <Link to={aboutPath} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{About}</h3>
                </button>
            </Link>
            <Link to={contactPath} className={c_0060}>
                <button className={c_0061}>
                    <h3 className={c_0062}>{Contact}</h3>
                </button>
            </Link>
        </div>
    );
}


export default HeaderLinks;