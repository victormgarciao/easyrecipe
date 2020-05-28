import React from 'react';

export function Button(props) {
    const { children: label } = props;
    return <button class="ui button"><span>{label}</span></button>
};