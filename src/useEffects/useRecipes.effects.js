import { useStateValue } from '../stateManagement/stateManagement';

function useAddRecipe(dispatch) {
    return async function addRecipe(recipe) {
        dispatch({
            type: 'ADD_RECIPE',
            payload: recipe,
        });
    };
}

export function useRecipesEffects() {
    const [, dispatch] = useStateValue();

    const addRecipe = useAddRecipe(dispatch);

    return { addRecipe };
}
