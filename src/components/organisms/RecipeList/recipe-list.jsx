import React from 'react';
import { List } from '../../molecules/List/list';
import { RecipeListItem } from '../../molecules/RecipeListItem/recipe-list-item';

function createRecipesListItemComponent(recipe) {
    const { title, href } = recipe;
    return <RecipeListItem key={href} href={href}>{title}</RecipeListItem>;
}

export function RecipeList(props) {
    const { recipesList } = props;
    return (
        <List>
            {recipesList.map(createRecipesListItemComponent)}
        </List>
    );
}