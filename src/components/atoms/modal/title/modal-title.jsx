import React from 'react';

export function ModalTitle({ children, classes = '' }) {
    return <h3 className={`${classes} modal__title`} >{children}</h3>;
}