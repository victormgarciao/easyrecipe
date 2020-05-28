import React from 'react';

export function List(props) {
    const { children } = props;
    return (
        <div class="ui list"> {children} </div>
    );
}