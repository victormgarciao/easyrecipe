import React from 'react';

export function Checkbox(props) {
    const { children, name, id } = props;
    return (
        <div className="checkbox flex flex-jc-ai">
            <input type="checkbox" name={name} id={id} />
            <label for={id}>{children}</label>
        </div>
    );
}