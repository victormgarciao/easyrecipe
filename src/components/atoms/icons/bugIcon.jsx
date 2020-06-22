import React from 'react';

export function BugIcon(props) {
    const { customClassNames = '' } = props;
    return <i className={`bug icon ${customClassNames}`}></i>
};
