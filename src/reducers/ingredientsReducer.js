import { uniq } from 'ramda';
import { ADD_INGREDIENTS } from '../actions/ingredients.actions';

export function ingredientsReducer(state, action) {
    switch(action.type) {
        case ADD_INGREDIENTS: {
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