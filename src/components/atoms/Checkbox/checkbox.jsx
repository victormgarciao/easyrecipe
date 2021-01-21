import React from 'react';

export function Checkbox(props) {
    const { children, name } = props;
    return (
        <>
        <div className="checkbox-mine">
            <input type="checkbox" name={name} />
            <label>{children}</label>
        </div>
        <div className="ui checkbox">
            <input type="checkbox" name={name} />
            <label>{children}</label>
        </div>
        </>
    );
}