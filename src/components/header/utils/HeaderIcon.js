import React from 'react';
import { Link } from "react-router-dom";
import { c_0056, c_0057, c_0058 } from '../../../resources/ClassNames';
import { alt_001, src_001 } from '../../../resources/Strings';
import "../../../styling/components/header/utils/HeaderIcon.css";

function HeaderIcon() {
    return (
        <Link to='/' className={c_0056}>
            <button className={c_0057}>
                <img 
                    className={c_0058} 
                    src={src_001} 
                    alt={alt_001} 
                />
            </button>
        </Link>
    );
}

export default HeaderIcon;
