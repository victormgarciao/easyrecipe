import React from 'react';
import { List } from '../../molecules/List/list';
import { ShopListItem } from '../../molecules/ShopListItem/shop-list-item';

function createShopListItemComponent(item) {
    const {recipeLink, ingredient, recipeTitle } = item;
    const key = `${recipeLink}-${ingredient}`;
    return <ShopListItem key={key} itemKey={key}>{ingredient} - {recipeTitle}</ShopListItem>;
}

export function ShopList(props) {
    const { ingredientsList } = props;
    return (
        <List>
            {ingredientsList.map(createShopListItemComponent)}
        </List>
    );
}