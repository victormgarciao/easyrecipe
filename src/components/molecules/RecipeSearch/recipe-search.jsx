import React from 'react';
import { Button } from '../../atoms/Button/button';
import { InputText } from '../../atoms/InputText/input-text';

const customStyle = {
    root: {
        width: '100%',
        paddingTop: '1em',
        paddingBottom: '1em',
    },
};

export function RecipeSearch() {
    return(
        <div className="ui action input" style={customStyle.root}>
            <InputText placeholder="easyrecipe.com" />
            <Button className="ui button">Search link...</Button>
        </div>
    );
};