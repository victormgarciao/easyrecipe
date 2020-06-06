import React from 'react';

export function Button(props) {
    const { children: label } = props;
    return <button className="ui button"><span>{label}</span></button>
};