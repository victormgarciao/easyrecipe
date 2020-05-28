import React from 'react';
import { List } from '../../molecules/List/list';
import { ShopListItem } from '../../molecules/ShopListItem/shop-list-item';

function createShopListItemComponent(item) {
    return <ShopListItem>{item}</ShopListItem>;
}

export function ShopList(props) {
    const { ingredientsList } = props;
    return (
        <List>
            {ingredientsList.map(createShopListItemComponent)}
        </List>
    );
}