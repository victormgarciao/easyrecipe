import React from 'react';

export function ModalFooter({children, classes = ''}) {
    return (
        <div className={`${classes} modal__actions flex flex-ai-c`}>
            {children}
        </div>
    );
}
