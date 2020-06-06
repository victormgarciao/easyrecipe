export const initialState = {
    ingredientsState: {
        ingredientsList: [
            { recipeLink: 'http://www.google.es', ingredient: '250g potatoes', recipeTitle: 'Risotto con setas' },
            { recipeLink: 'http://www.facebook.es', ingredient: '100g tomato sauce', recipeTitle: 'Risotto con setas' },
            { recipeLink: 'http://www.twitter.es', ingredient: '1 onion', recipeTitle: 'Carne con tomate' },
        ],
        isLoading: false,
    },
    recipesState: {
        recipesList: [
            { title: 'Risotto con setas', href: 'http://www.google.es'},
            { title: 'Carne con tomate', href: 'http://www.facebook.es'},
            { title: 'Te con sabor a tarta de queso', href: 'http://www.twitter.es'},
        ],
        isLoading: false,
    }
};
