import React from 'react';

export function Link(props) {
    const { children, href } = props;
    return <a href={href}>{children}</a>;
}