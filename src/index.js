import React from  'react';
import ReactDOM from 'react-dom';

import { MainTitle } from './components/atoms/MainTitle/main-title';
import RecipeSearchContainer from './containers/molecules/RecipeSearch/recipe-search.container';
import ShopListTemplateContainer from './containers/templates/ShopListTemplate/shop-list-template.container';
import RecipesListTemplateContainer from './containers/templates/RecipesListTemplate/recipes-list-template.container';
import ModalQueueTemplateContainer from './containers/templates/ModalQueueTemplate/modal-queue-template.container';

function App() {
    return (
        <div className="main ui container">
            <MainTitle>EasyRecipe</MainTitle>
            <RecipeSearchContainer />
            <ShopListTemplateContainer />
            <RecipesListTemplateContainer />
            <ModalQueueTemplateContainer />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));