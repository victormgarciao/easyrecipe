import React from 'react';

export function ListItem(props) {
    const { children } = props;
    return <div className="item">{children}</div>;
}