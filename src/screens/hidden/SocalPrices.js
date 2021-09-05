import React from 'react';
import FullPageImage from '../../components/images/FullPageImage';
import { SocalPricesSource, SocalPricesText } from '../../resources/Strings';

function SocalPrices () {
    return <FullPageImage source={SocalPricesSource} alternate={SocalPricesText} />;
}

export default SocalPrices;
