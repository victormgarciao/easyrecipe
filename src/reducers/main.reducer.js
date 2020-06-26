import { ingredientsReducer } from './ingredients.reducer';
import { recipesReducer } from './recipes.reducer';
import { modalReducer } from './modal.reducer';

export function mainReducer(mainState, action) {
    const { ingredientsState, recipesState, modalQueue } = mainState;

    return {
        ingredientsState: ingredientsReducer(ingredientsState, action),
        recipesState: recipesReducer(recipesState, action),
        modalQueue: modalReducer(modalQueue, action),
    }
};
