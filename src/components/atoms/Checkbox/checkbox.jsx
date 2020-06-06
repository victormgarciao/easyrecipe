import React from 'react';

export function Checkbox(props) {
    const { children, name } = props;
    return (
        <div className="ui checkbox">
            <input type="checkbox" name={name} />
            <label>{children}</label>
        </div>
    );
}