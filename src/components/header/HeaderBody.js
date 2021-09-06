import React, { useState } from 'react';
import HeaderIcon from './utils/HeaderIcon';
import HeaderLinks from './utils/HeaderLinks';
import MobileMenu from './utils/MobileMenu';
import MobileMenuButton from './utils/MobileMenuButton';
import { mobileMenuOff, mobileMenuOn } from './utils/HeaderUtils';
import { c_0022, c_0070, c_0071, c_0072 } from '../../resources/ClassNames';
import { MobileMenuId } from '../../resources/Strings';
import "../../styling/components/header/HeaderBody.css";

function HeaderBody () {
    const [count, setCount] = useState(0);

    const toggleMenu = () => {
        if(count === 0) {
            document.getElementById(MobileMenuId).style = mobileMenuOn;
            setCount(1);
        } else {
            document.getElementById(MobileMenuId).style = mobileMenuOff;
            setCount(0);
        }
    }

    return (
        <nav className={c_0022}>
            <div className={c_0070}>
                <HeaderIcon />
                <div className={c_0071}>
                    <HeaderLinks />
                    <MobileMenuButton menuFunction={toggleMenu} />
                </div>
            </div>
            <div className={c_0072}>
                <MobileMenu 
                    id={MobileMenuId} 
                    count={count} 
                    mobileMenuOff={mobileMenuOff} 
                    mobileMenuOn={mobileMenuOn} 
                />
            </div>
        </nav>
    );
}

export default HeaderBody;
