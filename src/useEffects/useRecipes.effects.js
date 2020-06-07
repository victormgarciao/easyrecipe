import { useStateValue } from '../stateManagement/stateManagement';

function useDispatchToAddRecipe(dispatch) {
    return async function addRecipe(recipe) {
        dispatch({
            type: 'ADD_RECIPE',
            payload: recipe,
        });
    };
}

export function useRecipesEffects() {
    const [, dispatch] = useStateValue();

    const addRecipe = useDispatchToAddRecipe(dispatch);

    return { addRecipe };
}
