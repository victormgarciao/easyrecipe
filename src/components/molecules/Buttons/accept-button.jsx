import React from 'react';
import { Button } from '../../atoms/Button/button';

export function AcceptButton(props) {
    const {
        children,
        ...buttonProps
    } = props;
    return (
        <Button
            customClassNames="green ok inverted"
            {...buttonProps}
        >
            <i className="checkmark icon"></i>
            {children}
        </Button>
    );
};
