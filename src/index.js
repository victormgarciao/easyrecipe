import React from  'react';
import ReactDOM from 'react-dom';

// import { MainTitle } from './components/atoms/MainTitle/main-title';
import { HeaderContainer } from './containers/atom/Header/Header.container';

import RecipeSearchContainer from './containers/molecules/RecipeSearch/recipe-search.container';
import ShopListTemplateContainer from './containers/templates/ShopListTemplate/shop-list-template.container';
import RecipesListTemplateContainer from './containers/templates/RecipesListTemplate/recipes-list-template.container';
import ModalQueueTemplateContainer from './containers/templates/ModalQueueTemplate/modal-queue-template.container';

import './sass/styles.scss';

function App() {
    return (
        <div>
            <HeaderContainer />
            <main
                style={{ margin: '64px 8px 0' }}
            >
                <div className="recipe-search-wrapper" style={{ display: 'flex', justifyContent: 'center'}}>
                    <RecipeSearchContainer />
                </div>
                {/* <MainTitle>EasyRecipe</MainTitle> */}
                <ShopListTemplateContainer />
                <RecipesListTemplateContainer />
                <ModalQueueTemplateContainer />
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));