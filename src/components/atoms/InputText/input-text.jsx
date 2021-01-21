import React from 'react';

export function InputText(props) {
    const { placeholder, classes = '', ...inputProps } = props;
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`input--text ${classes}`}
            {...inputProps}
        />
    );
};