import React from 'react';
import FullPageImage from '../../components/images/FullPageImage';
import { NorcalPricesSource, NorcalPricesText } from '../../resources/Strings';

function NorcalPrices() {
    return <FullPageImage source={NorcalPricesSource} alternate={NorcalPricesText} />;
}

export default NorcalPrices;
