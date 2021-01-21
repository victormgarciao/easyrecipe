import React from 'react';

export function ShadowWrapper ({ classes = '', children }) {
    return (
        <div className={`shadow-wrapper ${classes}`}>
            {children}
        </div>
    );
}
