import { useStateValue } from '../stateManagement/stateManagement';
import { addRecipe } from '../actions/recipes.actions';

function useAddRecipe(dispatch) {
    return async function dispatchAddRecipe(recipe) {
        dispatch(addRecipe(recipe));
    };
}

export function useRecipesEffects() {
    const [, dispatch] = useStateValue();

    const addRecipe = useAddRecipe(dispatch);

    return { addRecipe };
}
