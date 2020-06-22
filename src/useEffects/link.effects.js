import { getIngredientsAndRecipeFromLink } from '../services/data.service';
import { useIngredientsEffects } from './ingredients.effects';
import { useRecipesEffects } from './recipes.effects';
import { useModalEffects } from './modals.effects';
import { cond, propSatisfies, isNil } from 'ramda';
import { ifNot } from '../utils/common.utils';
import {  INGREDIENTS_NOT_FOUND } from '../containers/templates/ModalQueueTemplate/modal-queue.constants';

function useHandleDataFromLink() {
    const { addIngredients } = useIngredientsEffects();
    const { addRecipe } = useRecipesEffects();
    const { addModal } = useModalEffects();

    function handleLink(props) {
        const { recipe, ingredients } = props;
        addIngredients(ingredients);
        addRecipe(recipe);
    }

    function handleError({ link }) {
        addModal({
            modalName: INGREDIENTS_NOT_FOUND,
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
