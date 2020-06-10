import React from 'react';
import { useStateValue } from '../../../stateManagement/stateManagement';
import { SecondaryTitle } from '../../../components/atoms/SecondaryTitle/secondary-title';
import { ShopList } from '../../../components/organisms/ShopList/shop-list';

export function ShopListTemplateContainer() {
    const [state] = useStateValue();

    const { ingredientsState: { ingredientsList } } = state;

    return(
        <>
            <SecondaryTitle>Shop List</SecondaryTitle>
            <ShopList ingredientsList={ingredientsList} />
        </>
    );
};