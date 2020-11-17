import { getIngredientsAndRecipeFromLink } from '../services/data.service';
import { cond, propSatisfies, isNil } from 'ramda';
import { ifNot } from '../utils/common.utils';
import {  INGREDIENTS_NOT_FOUND } from '../containers/templates/ModalQueueTemplate/modal-queue.constants';
import store from '../store/main.store';
import modalQueueStore from '../store/modalqueue.store';

function useHandleDataFromLink() {
    const { addModal } = modalQueueStore;

    function handleLink(props) {
        const { recipe, ingredients } = props;
        // TODO, THIS HAS TO BE MORE AUTOMATIC
        const recipeNormalized = { ...recipe, ingredientsList: ingredients } // THIS HAS TO BE AUTOMATED
        store.addRecipe(recipeNormalized);
    }

    function handleError({ link }) {
        addModal({
            name: INGREDIENTS_NOT_FOUND,
            data: { link }
        })
    }

    const handleResponse = cond([
        [ propSatisfies(isNil, 'error'), handleLink ],
        [ ifNot, handleError]
    ]);


    return function handleDataFromLink(link) {
        getIngredientsAndRecipeFromLink({ link })
            .then(handleResponse);
    };
}

export function useLinkEffects() {
    const handleDataFromLink = useHandleDataFromLink();
    return { handleDataFromLink };
}
