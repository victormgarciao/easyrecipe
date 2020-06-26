import React from 'react';
import { Button } from '../../atoms/Button/button';

export function CancelButton(props) {
    const {
        children,
        ...buttonProps
    } = props;
    return (
        <Button
            customClassNames="red basic cancel inverted"
            {...buttonProps}
        >
            <i className="remove icon"></i>
            {children}
        </Button>
    );
};
