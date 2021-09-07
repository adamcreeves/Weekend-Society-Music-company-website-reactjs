import React from 'react';
import { c_0113 } from '../../resources/ClassNames';
import { t_05, t_06, t_07 } from '../../resources/Strings';
import Loader from "react-loader-spinner";
import '../../styling/components/subcomponents/LoadingSpinner.css';

function LoadingSpinner({ isVisible }) {
    return (
        <div className={c_0113}>
                <Loader 
                    type={t_05} 
                    color={t_06} 
                    height={t_07} 
                    width={t_07} 
                    visible={isVisible} />
            </div>
    );
}

export default LoadingSpinner;
