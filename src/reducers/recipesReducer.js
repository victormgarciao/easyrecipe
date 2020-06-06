import { uniq } from 'ramda';

export function recipesReducer(state, action) {
    switch(action.type) {
        case 'ADD_RECIPE': {
            const nextState = {
                ...state,
                recipesList: uniq([
                    ...state.recipesList,
                    action.payload,
                ]),
            };
            return nextState;
        }
        default:
            return state;
    };
};