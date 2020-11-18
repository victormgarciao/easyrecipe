import React from 'react';
import { observer } from 'mobx-react';
import { RecipeSearch } from '../../../components/molecules/RecipeSearch/recipe-search';
import modalQueueStore from '../../../store/modalqueue.store';
import store from '../../../store/main.store';
import recipeSearchStore from '../../../store/link.store';

export function RecipeSearchContainer() {
    const { link, handleDataFromLink, setLinkFromEvent } = recipeSearchStore;
    
    function handleSearch() {
        const { addModal } = modalQueueStore;
        const { addRecipe } = store;
        handleDataFromLink({ addModal, addRecipe });
    }

    return(
        <RecipeSearch
            link={link}
            handleSearch={handleSearch}
            setLinkValue={setLinkFromEvent}
        />
    );
};

export default observer(RecipeSearchContainer);