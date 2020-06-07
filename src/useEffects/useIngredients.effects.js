import { useStateValue } from '../stateManagement/stateManagement';
import { addIngredients } from '../actions/ingredients.actions';

function useAddIngredients(dispatch) {
    return async function dispatchAddIngredients(ingredients) {
        dispatch(addIngredients(ingredients));
    };
}

export function useIngredientsEffects() {
    const [, dispatch] = useStateValue();

    const addIngredients = useAddIngredients(dispatch);

    return { addIngredients };
}
