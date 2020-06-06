import React from 'react';
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

    const link =  {
        ingredients: [
            { recipeLink: 'http://www.tupitupi.es', ingredient: '100g sal', recipeTitle: 'Gazpacho' },
            { recipeLink: 'http://www.tupituipi.es', ingredient: '1 patata', recipeTitle: 'Gazpacho' },
        ],
        recipe: { title: 'Gazpacho', href: 'http://www.gazpacho.es'},
    };
    return(
        <div className="ui action input" style={customStyle.root}>
            <InputText placeholder="easyrecipe.com" />
            <Button
                className="ui button"
                onClick={() => handleLink(link)}
            >
                Search link...
            </Button>
        </div>
    );
};