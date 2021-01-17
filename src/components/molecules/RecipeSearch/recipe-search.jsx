import React from 'react';
import { Button } from '../../atoms/Button/button';
import { InputText } from '../../atoms/InputText/input-text';

const customStyle = {
    root: {
        maxWidth: '600px',
        width: '100%',
        paddingTop: '1em',
        paddingBottom: '1em',
    },
};

export function RecipeSearch(props) {
    const { link, setLinkValue, handleSearch } = props;

    return(
        <div className="ui action input" style={customStyle.root}>
            <InputText
                placeholder="Insert Recipe Link"
                onChange={setLinkValue}
                value={link}
            />
            <Button
                className="ui button"
                onClick={handleSearch}
            >
                Get Ingredients...
            </Button>
        </div>
    );
};