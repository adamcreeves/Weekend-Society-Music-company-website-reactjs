import React from 'react';
import { Link } from "react-router-dom";
import { c_0063, c_0064, c_0065, c_0066 } from '../../../resources/ClassNames';
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
import "../../../styling/components/header/utils/MobileMenu.css";

function MobileMenu({ id, count, mobileMenuOff, mobileMenuOn }) {
        return (
            <div id={id} className={c_0063} style={count === 0 ? mobileMenuOff : mobileMenuOn}>
                <Link to={homePath} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Home}</div>
                    </button>
                </Link>
                <Link to={servicesPath} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Services}</div>
                    </button>
                </Link>
                <Link to={videosPath} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Videos}</div>
                    </button>
                </Link>
                <Link to={aboutPath} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{About}</div>
                    </button>
                </Link>
                <Link to={contactPath} className={c_0064}>
                    <button className={c_0065}>
                        <div className={c_0066}>{Contact}</div>
                    </button>
                </Link>
            </div>
    );
}

export default MobileMenu;
