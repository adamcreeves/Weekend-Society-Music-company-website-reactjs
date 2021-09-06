import React from 'react';
import { Link } from "react-router-dom";
import { c_0063, c_0064, c_0065, c_0066 } from '../../../resources/ClassNames';
import { 
    About, 
    Contact, 
    Home, 
    Services, 
    ToAbout, 
    ToContact, 
    ToHome, 
    ToServices, 
    ToVideos, 
    Videos } from '../../../resources/Strings';
import "../../../styling/components/header/utils/MobileMenu.css";

function MobileMenu ({ id, count, mobileMenuOff, mobileMenuOn }) {
        return (
            <div id={id} className={c_0063} style={count === 0 ? mobileMenuOff : mobileMenuOn}>
                <Link to={ToHome} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Home}</div>
                    </button>
                </Link>
                <Link to={ToServices} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Services}</div>
                    </button>
                </Link>
                <Link to={ToVideos} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Videos}</div>
                    </button>
                </Link>
                <Link to={ToAbout} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{About}</div>
                    </button>
                </Link>
                <Link to={ToContact} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Contact}</div>
                    </button>
                </Link>
            </div>
    );
}

export default MobileMenu;
