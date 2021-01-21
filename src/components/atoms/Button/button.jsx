import React from 'react';

export function Button(props) {
    const {
        children,
        classes = '',
        ...buttonProps
    } = props;
    return (
        <button
            className={`cta ${classes}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
