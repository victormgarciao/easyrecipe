import React from  'react';
import ReactDOM from 'react-dom';

import { MainTitle } from './components/atoms/MainTitle/main-title';
import { RecipesListTemplate } from './components/templates/RecipesListTemplate/recipes-list-template';
import { RecipeSearch } from './components/molecules/RecipeSearch/recipe-search';
import { ShopListTemplate } from './components/templates/ShopListTemplate/shop-list-templates';

import { StateProvider } from './stateManagement/stateManagement'
import { initialState } from './stateManagement/initialState';
import { mainReducer } from './reducers/mainReducer';

function App() {
    return (
        <StateProvider initialState={initialState} reducer={mainReducer}>
            <div class="main ui container">
                <MainTitle>EasyRecipe</MainTitle>
                <RecipeSearch />
                <ShopListTemplate />
                <RecipesListTemplate />
            </div>
        </StateProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));