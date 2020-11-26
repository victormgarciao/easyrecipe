import React from 'react';

export function Link(props) {
    const { children, href, target = '_self' } = props;
    return <a href={href} target={target} >{children}</a>;
}