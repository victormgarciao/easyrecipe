import React from 'react';

export function Button(props) {
    const { children: label, ...buttonProps } = props;
    return (
        <button
            className="ui button"
            {...buttonProps}
        >
            <span>{label}</span>
        </button>
    );
};