import React from 'react';
import { observer } from 'mobx-react';
import { SectionTitle } from '../../../components/atoms/SectionTitle/section-title';
import { RecipeList } from '../../../components/organisms/RecipeList/recipe-list';
import store from '../../../store/main.store';

export function RecipesListTemplateContainer() {
    return (
        <>
            <SectionTitle>Recipes</SectionTitle>
            <RecipeList recipesList={store.recipesList} />
        </>
    );
};

export default observer(RecipesListTemplateContainer);