import React from 'react';

const customStyles = {
    title: {
        marginTop: '3em',
        marginBottom: '1em',
    }
};

export function MainTitle(props) {
    const { children } = props;
    return (
        <h1
            class="ui center aligned header"
            style={customStyles.title}
        >
            {children}
        </h1>
    );
};