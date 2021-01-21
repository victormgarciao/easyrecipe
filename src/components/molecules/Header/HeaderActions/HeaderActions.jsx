import React from 'react';
import { Button } from '../../../atoms/Button/button';

export function HeaderActions() {
    return (
        <div className="header__actions flex flex-jc-fe flex-ai-c hide-for-mobile">
            <Button onClick={() => {}}>x</Button>
            <Button>x</Button>
        </div>
    );
}