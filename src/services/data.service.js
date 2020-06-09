import { pipe } from 'ramda';
import { getHttpRequest, openHttpRequestWithLink, sendHttpRequest, onHttpRequestReadyStateChange } from './httpRequest.service';
import { getTitleFromElement, getIngredientListElement, getIngredientList } from './dom.service';


function createIngredient(recipe) {
    return function makeObject(item) {
        const { href: recipeLink, title: recipeTitle } = recipe;
        const { textContent: ingredient } = item;

        return { recipeLink, ingredient, recipeTitle };
    };
}

function normalizeIngredientsList(props) {
    const { ingredientList, recipe } = props;
    return ingredientList.map(createIngredient(recipe))
}

export function addIngredientsAndRecipeToStore(props) {
    const {
        addIngredients,
        addRecipe,
        ingredients,
        recipe,
    } = props;
    addIngredients(ingredients);
    addRecipe(recipe);
    return props;
}

const getIngredientsFromDom = pipe(
    getIngredientListElement,
    getIngredientList,
    normalizeIngredientsList,
);

export function createIngredientsObject(props) {
    const { linkElement, recipe } = props;
    const allElements = [...linkElement.getElementsByTagName("*")];
    
    return {
        ...props,
        ingredients: getIngredientsFromDom({ allElements, recipe }),
    };
}

export function createRecipeObject(props) {
    const { linkElement, link } = props;

    return {
        ...props,
        recipe: {
            href: link,
            title: getTitleFromElement({ linkElement }),
        },
    };
}

export const getIngredientsAndRecipeFromLink = pipe(
    getHttpRequest,
    openHttpRequestWithLink,
    sendHttpRequest,
    onHttpRequestReadyStateChange,
);