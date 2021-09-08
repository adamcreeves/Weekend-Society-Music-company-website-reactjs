import React from 'react';
import { c_0113 } from '../../resources/ClassNames';
import { t_05, t_06 } from '../../resources/Strings';
import Loader from "react-loader-spinner";
import '../../styling/components/subcomponents/LoadingSpinner.css';
import { int_01 } from '../../resources/Integers';

function LoadingSpinner({ isVisible }) {
    return (
        <div className={c_0113}>
                <Loader 
                    type={t_05} 
                    color={t_06} 
                    height={int_01} 
                    width={int_01} 
                    visible={isVisible} />
            </div>
    );
}

export default LoadingSpinner;
