import React from 'react';

export function InputText(props) {
    const { placeholder } = props;
    return <input type="text" placeholder={placeholder} />
};