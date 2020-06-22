import React from 'react';

export function Button(props) {
    const {
        children,
        customClassNames,
        ...buttonProps
    } = props;
    return (
        <button
            className={`ui button ${customClassNames}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
