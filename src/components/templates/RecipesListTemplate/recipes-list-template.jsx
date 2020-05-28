import React from 'react';
import { SecondaryTitle } from '../../atoms/SecondaryTitle/secondary-title';
import { RecipeList } from '../../organisms/RecipeList/recipe-list';

const recipesList = [
    { title: 'Risotto con setas', href: 'http://www.google.es'},
    { title: 'Carne con tomate', href: 'http://www.google.es'},
    { title: 'Te con sabor a tarta de queso', href: 'http://www.google.es'},
];

export function RecipesListTemplate() {
    return(
        <>
            <SecondaryTitle>Recipes</SecondaryTitle>
            <RecipeList recipesList={recipesList} />
        </>
    );
};