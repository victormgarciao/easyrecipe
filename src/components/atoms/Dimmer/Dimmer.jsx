import React from 'react';

export function Dimmer({ children }) {
    return (
        <div className="dimmer flex flex-jc-c flex-ai-c flex-column">
            {children}
        </div>
    )
};
