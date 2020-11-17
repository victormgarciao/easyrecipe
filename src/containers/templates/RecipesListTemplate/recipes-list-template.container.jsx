import React from 'react';
import { observer } from 'mobx-react';
import { SecondaryTitle } from '../../../components/atoms/SecondaryTitle/secondary-title';
import { RecipeList } from '../../../components/organisms/RecipeList/recipe-list';
import store from '../../../store/main.store';

export function RecipesListTemplateContainer() {
    return (
        <>
            <SecondaryTitle>Recipes</SecondaryTitle>
            <RecipeList recipesList={store.recipesList} />
        </>
    );
};

export default observer(RecipesListTemplateContainer);