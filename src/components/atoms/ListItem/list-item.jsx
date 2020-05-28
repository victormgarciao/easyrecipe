import React from 'react';

export function ListItem(props) {
    const { children } = props;
    return <div class="item">{children}</div>;
}