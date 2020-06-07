import React from 'react';

export function InputText(props) {
    const { placeholder, ...inputProps } = props;
    return <input type="text" placeholder={placeholder} {...inputProps} />
};