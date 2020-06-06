import React from 'react';
import { SecondaryTitle } from '../../atoms/SecondaryTitle/secondary-title';
import { ShopList } from '../../organisms/ShopList/shop-list';
import { useStateValue } from '../../../stateManagement/stateManagement';

export function ShopListTemplate() {
    const [state] = useStateValue();

    const { ingredientsState: { ingredientsList } } = state;

    return(
        <>
            <SecondaryTitle>Shop List</SecondaryTitle>
            <ShopList ingredientsList={ingredientsList} />
        </>
    );
};