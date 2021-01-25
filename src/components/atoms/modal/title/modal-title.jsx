import React from 'react';

export function ModalTitle({ children, classes = '' }) {
    return <h3 className={`${classes} modal-custom__title`} >{children}</h3>;
}