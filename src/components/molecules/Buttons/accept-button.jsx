import React from 'react';
import { Button } from '../../atoms/Button/button';

export function AcceptButton(props) {
    const {
        children,
        ...buttonProps
    } = props;
    return (
        <Button
            classes="-green"
            {...buttonProps}
        >
            {children}
        </Button>
    );
};
