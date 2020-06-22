import { useStateValue } from '../stateManagement/stateManagement';
import { addRecipe } from '../actions/recipes.actions';

function useAddRecipe() {
    const [, dispatch] = useStateValue();
    return async function dispatchAddRecipe(recipe) {
        dispatch(addRecipe(recipe));
    };
}

export function useRecipesEffects() {
    const addRecipe = useAddRecipe();
    return { addRecipe };
}
