import React, { useState } from 'react';
import { Button } from '../../atoms/Button/button';
import { InputText } from '../../atoms/InputText/input-text';
import { useLink } from '../../../use/useLink';

const customStyle = {
    root: {
        width: '100%',
        paddingTop: '1em',
        paddingBottom: '1em',
    },
};

export function RecipeSearch() {
    const handleLink = useLink();
    const [link, setLink] = useState('');
    function onChange(event) {
        setLink(event.target.value);
    }

    function onClick() {
        setLink('');
        handleLink(link)
    }

    return(
        <div className="ui action input" style={customStyle.root}>
            <InputText
                placeholder="easyrecipe.com"
                onChange={onChange}
                value={link}
            />
            <Button
                className="ui button"
                onClick={onClick}
            >
                Search link...
            </Button>
        </div>
    );
};