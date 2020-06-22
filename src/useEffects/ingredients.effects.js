import { useStateValue } from '../stateManagement/stateManagement';
import { addIngredients } from '../actions/ingredients.actions';

function useAddIngredients() {
    const [, dispatch] = useStateValue();
    return function dispatchAddIngredients(ingredients) {
        dispatch(addIngredients(ingredients));
    };
}

export function useIngredientsEffects() {
    const addIngredients = useAddIngredients();
    return { addIngredients };
}
