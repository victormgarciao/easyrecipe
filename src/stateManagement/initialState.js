export const initialState = {
    ingredientsState: {
        ingredientsList: [
            '250g potatoes',
            '100g tomato sauce',
            '1 onion',
        ],
        isLoading: false,
    },
    recipesState: {
        recipesList: [
            { title: 'Risotto con setas', href: 'http://www.google.es'},
            { title: 'Carne con tomate', href: 'http://www.google.es'},
            { title: 'Te con sabor a tarta de queso', href: 'http://www.google.es'},
        ],
        isLoading: false,
    }
};
