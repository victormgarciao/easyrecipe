import React from 'react';

export function Modal({ classes = '', children }) {
    return (
        <div className={`${classes} modal`}>
            {children}
        </div>
    )
};
