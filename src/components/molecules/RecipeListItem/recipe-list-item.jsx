import React from 'react';
import { ListItem } from '../../atoms/ListItem/list-item';
import { Link } from '../../atoms/Link/link';

export function RecipeListItem(props) {
    const { children, href } = props;
    return (
        <ListItem>
            <Link href={href}>{children}</Link>
        </ListItem>
    );
}