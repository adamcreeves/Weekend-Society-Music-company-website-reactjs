import React from 'react';
import FullPageImage from '../../components/images/FullPageImage';
import { CocktailGroupsSource, CocktailGroupsText } from '../../resources/Strings';

function CocktailGroups () {
    return <FullPageImage source={CocktailGroupsSource} alternate={CocktailGroupsText} />;
}

export default CocktailGroups;