import React from  'react';
import ReactDOM from 'react-dom';

import { HeaderContainer } from './containers/atom/Header/Header.container';

import RecipeSearchContainer from './containers/molecules/RecipeSearch/recipe-search.container';
import ShopListTemplateContainer from './containers/templates/ShopListTemplate/shop-list-template.container';
import RecipesListTemplateContainer from './containers/templates/RecipesListTemplate/recipes-list-template.container';
import ModalQueueTemplateContainer from './containers/templates/ModalQueueTemplate/modal-queue-template.container';

import './sass/styles.scss';
import { CenteredSection } from './components/atoms/CenteredSection/centered-section';

function App() {
    return (
        <div>
            <HeaderContainer />
            <main
                style={{ margin: '64px 8px 0' }}
            >
                <CenteredSection>
                    <RecipeSearchContainer />
                </CenteredSection>
                <ShopListTemplateContainer />
                <RecipesListTemplateContainer />
                <ModalQueueTemplateContainer />
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));