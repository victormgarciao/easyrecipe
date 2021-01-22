import React from 'react';

export function Link(props) {
    const {
        children,
        href='#',
        target = '_self',
        classes = '',
        ...restProps
    } = props;

    return (
        <a
            className={`link ${classes}`}
            href={href}
            target={target}
            {...restProps}
        >
            {children}
        </a>
    );
}
