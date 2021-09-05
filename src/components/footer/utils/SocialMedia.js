import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import { FacebookProfile, InstagramProfile } from '../../../resources/Strings';
import "../../../styling/components/footer/utils/SocialMedia.css";

function SocialMedia () {
    return (
        <div className='socialMedia'>
            <a href={InstagramProfile}
                className='solicalMedia__link'>
                <IconButton>
                    <InstagramIcon 
                        fontSize='large' 
                        className='socialMedia__icon' />
                </IconButton>
            </a>
            <a href={FacebookProfile}
                className='solicalMedia__link'>
                <IconButton>
                    <FacebookIcon 
                        fontSize='large' 
                        className='socialMedia__icon' />
                </IconButton>
            </a>
        </div>
    );
}

export default SocialMedia;