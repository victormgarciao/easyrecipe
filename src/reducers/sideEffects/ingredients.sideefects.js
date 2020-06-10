import { uniq } from 'ramda';


export function addIngredientsToStore(state, action) {
    const { ingredientsList } = state;
    const nextState = {
        ...state,
        ingredientsList: uniq([
            ...ingredientsList,
            ...action.payload,
        ]),
    };
    return nextState;
}