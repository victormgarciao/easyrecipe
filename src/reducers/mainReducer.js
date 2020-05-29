import { ingredientsReducer } from "./ingredientsReducer";
import { recipesReducer } from "./recipesReducer";

export function mainReducer(mainState, action) {
    const { ingredientsState, recipesState } = mainState;

    return {
        ingredientsReducer: ingredientsReducer(ingredientsState, action),
        recipesState: recipesReducer(recipesState, action),
    }
};
