import { uniq } from 'ramda';

export function ingredientsReducer(state, action) {
    switch(action.type) {
        case 'ADD_INGREDIENTS': {
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
        default:
            return state;
    };
};