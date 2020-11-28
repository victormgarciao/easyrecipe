import React from 'react';
import { observer } from 'mobx-react';
import { RecipeSearch } from '../../../components/molecules/RecipeSearch/recipe-search';
import modalQueueStore from '../../../store/modalqueue.store';
import store from '../../../store/main.store';
import recipeSearchStore from '../../../store/recipe-search.store';
import { isSuccess, ifNot, exists } from '../../../utils/common.utils';
import { cond } from 'ramda';
import { INGREDIENTS_NOT_FOUND } from '../../templates/ModalQueueTemplate/modal-queue.constants';

export function RecipeSearchContainer() {
    const {
        clearLink,
        getRecipeFromLink,
        link,
        setLinkFromEvent,
    } = recipeSearchStore;
    const { addModal } = modalQueueStore;
    const { addRecipe } = store;

    function handleSearch() {
        cond([
            [ exists, searchRecipe ],
        ])(link);
    };


    function searchRecipe() {
        clearLink();
        getRecipeFromLink({ link })
            .then(
                cond([
                    [ isSuccess, handleLink ],
                    [ ifNot, handleError]
                ])
            );
    };


    function handleLink({ recipe }) {
        addRecipe(recipe);
    };


    function handleError({ link }) {
        addModal({
            name: INGREDIENTS_NOT_FOUND,
            data: { link }
        });
    };


    return(
        <RecipeSearch
            link={link}
            handleSearch={handleSearch}
            setLinkValue={setLinkFromEvent}
        />
    );
};

export default observer(RecipeSearchContainer);