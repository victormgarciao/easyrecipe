import React from 'react';

export function ListItem(props) {
    const { children } = props;
    return <div className="list-no-semantic__item">{children}</div>;
}