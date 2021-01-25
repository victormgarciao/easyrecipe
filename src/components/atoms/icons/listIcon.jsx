import React from 'react';

import { iconName } from './icons.constants';
import { IconWrapper } from './IconWrapper/icon-wrapper';

export function ListIcon(props) {
    const { classes = '' } = props;

    return (
        <IconWrapper>
            <i className={`${classes} ${iconName.LIST}`} />
        </IconWrapper>
    );
};
