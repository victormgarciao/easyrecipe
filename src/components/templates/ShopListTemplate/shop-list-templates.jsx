import React from 'react';
import { SecondaryTitle } from '../../atoms/SecondaryTitle/secondary-title';
import { ShopList } from '../../organisms/ShopList/shop-list';

const shopList = [
    '250g potatoes',
    '100g tomato sauce',
    '1 onion',
];

export function ShopListTemplate() {
    return(
        <>
            <SecondaryTitle>Shop List</SecondaryTitle>
            <ShopList ingredientsList={shopList} />
        </>
    );
};