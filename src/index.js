import React from  'react';
import ReactDOM from 'react-dom';
import { MainTitle } from './components/atoms/MainTitle/main-title';
import { RecipeSearch } from './components/molecules/RecipeSearch/recipe-search';
import { ShopListTemplate } from './components/templates/ShopListTemplate/shop-list-templates';
import { RecipesListTemplate } from './components/templates/RecipesListTemplate/recipes-list-template';

function App() {
    return (
        <div class="main ui container">
            <MainTitle>EasyRecipe</MainTitle>
            <RecipeSearch />
            <ShopListTemplate />
            <RecipesListTemplate />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));