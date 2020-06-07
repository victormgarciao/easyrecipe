import { useStateValue } from '../stateManagement/stateManagement';

function useAddIngredients(dispatch) {
    return async function addIngredients(ingredients) {
        dispatch({
            type: 'ADD_INGREDIENTS',
            payload: ingredients,
        });
    };
}

export function useIngredientsEffects() {
    const [, dispatch] = useStateValue();

    const addIngredients = useAddIngredients(dispatch);

    return { addIngredients };
}
