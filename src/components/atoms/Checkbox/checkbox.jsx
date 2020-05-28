import React from 'react';

export function Checkbox(props) {
    const { children, name } = props;
    return (
        <div class="ui checkbox">
            <input type="checkbox" name={name} />
            <label>{children}</label>
        </div>
    );
}