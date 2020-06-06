import React from 'react';

export function List(props) {
    const { children } = props;
    return (
        <div className="ui list"> {children} </div>
    );
}