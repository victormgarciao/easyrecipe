import React from 'react';
import { SecondaryTitle } from '../../atoms/SecondaryTitle/secondary-title';
import { RecipeList } from '../../organisms/RecipeList/recipe-list';
import { useStateValue } from '../../../stateManagement/stateManagement';

export function RecipesListTemplate() {
    const [state] = useStateValue();
    const { recipesState: { recipesList } } = state;

    return(
        <>
            <SecondaryTitle>Recipes</SecondaryTitle>
            <RecipeList recipesList={recipesList} />
        </>
    );
};