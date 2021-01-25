import React from 'react';

export function List(props) {
    const { children } = props;
    return <div className="list"> {children} </div>;
}