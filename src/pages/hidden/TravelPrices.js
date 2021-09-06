import React from 'react';
import FullPageImage from '../../components/images/FullPageImage';
import { TravelPricesSource, TravelPricesText } from '../../resources/Strings';

function TravelPrices() {
    return <FullPageImage source={TravelPricesSource} alternate={TravelPricesText} />;
}

export default TravelPrices;
