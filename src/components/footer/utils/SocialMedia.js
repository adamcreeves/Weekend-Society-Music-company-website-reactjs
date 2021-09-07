import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import { IconSize, src_015, src_016 } from '../../../resources/Strings';
import { c_0049, c_0050, c_0051 } from '../../../resources/ClassNames';
import "../../../styling/components/footer/utils/SocialMedia.css";

function SocialMedia() {
    return (
        <div className={c_0049}>
            <a href={src_015}
                className={c_0050}>
                <IconButton>
                    <InstagramIcon 
                        fontSize={IconSize} 
                        className={c_0051} />
                </IconButton>
            </a>
            <a href={src_016}
                className={c_0050}>
                <IconButton>
                    <FacebookIcon 
                        fontSize={IconSize} 
                        className={c_0051} />
                </IconButton>
            </a>
        </div>
    );
}

export default SocialMedia;
