import React from 'react';
import "../styling/MobileMenuButton.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function MobileMenuButton({menuFunction}) {
    return (
        <div className='mobileMenuButton__container'>
            <button id='menuButton' className='mobileMenuButton__button' onClick={menuFunction}>
                <ReorderIcon fontSize='large' className='mobileMenuButton__icon' />
            </button>
        </div>
    )
}

export default MobileMenuButton
