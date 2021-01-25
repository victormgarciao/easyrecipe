import React from 'react';
import { Button } from '../../atoms/Button/button';

export function CancelButton(props) {
    const {
        children,
        ...buttonProps
    } = props;
    return (
        <Button
            classes="-red"
            {...buttonProps}
        >
            {children}
        </Button>
    );
};
