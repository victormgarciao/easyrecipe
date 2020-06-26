import React from 'react';
import { useStateValue } from '../../../stateManagement/stateManagement';
import { SecondaryTitle } from '../../../components/atoms/SecondaryTitle/secondary-title';
import { RecipeList } from '../../../components/organisms/RecipeList/recipe-list';

export function RecipesListTemplateContainer() {
    const [state] = useStateValue();
    const { recipesState: { recipesList } } = state;

    return (
        <>
            <SecondaryTitle>Recipes</SecondaryTitle>
            <RecipeList recipesList={recipesList} />
        </>
    );
};