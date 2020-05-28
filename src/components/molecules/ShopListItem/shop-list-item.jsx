import React from 'react';
import { ListItem } from '../../atoms/ListItem/list-item';
import { Checkbox } from '../../atoms/Checkbox/checkbox';

export function ShopListItem(props) {
    const { children } = props;
    return (
        <ListItem>
            <Checkbox name="shop-list">{children}</Checkbox>
        </ListItem>
    );
}