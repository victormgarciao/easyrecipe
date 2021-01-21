import React from 'react';
import { Button } from '../../atoms/Button/button';
import { InputText } from '../../atoms/InputText/input-text';
import { ShadowWrapper } from '../../atoms/ShadowWrapper/shadow-wrapper';


export function RecipeSearch(props) {
    const { link, setLinkValue, handleSearch } = props;

    return(
        <ShadowWrapper classes='recipe-search'>
            <InputText
                placeholder="Insert Recipe Link"
                onChange={setLinkValue}
                value={link}
                classes='hide-border-right'
            />
            <Button classes="hide-border-left" onClick={handleSearch} >
                Get Ingredients...
            </Button>
        </ShadowWrapper>
    );
};