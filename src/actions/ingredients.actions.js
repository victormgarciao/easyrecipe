export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';


export function addIngredients(ingredients) {
    return {
        type: ADD_INGREDIENTS,
        payload: ingredients,
    };
}