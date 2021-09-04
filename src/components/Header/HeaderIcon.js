import React from 'react';
import { Link } from "react-router-dom";
import "../../styling/components/Header/HeaderIcon.css";

function HeaderIcon() {
    return (
        <Link to='/' className='headerIcon__linkHome'>
            <button className='headerIcon__buttonHome'>
                <img 
                    className='headerIcon__icon' 
                    src='/weekend_icon.png' 
                    alt='Weekend Society Icon' 
                />
            </button>
        </Link>
    );
}

export default HeaderIcon;
