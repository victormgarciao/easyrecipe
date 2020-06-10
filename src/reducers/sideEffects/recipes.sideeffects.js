import { uniq } from 'ramda';


export function addRecipeToStore(state, action) {
    const nextState = {
        ...state,
        recipesList: uniq([
            ...state.recipesList,
            action.payload,
        ]),
    };
    return nextState;
}