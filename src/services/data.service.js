import { pipe, cond, propSatisfies, isNil, identity } from 'ramda';
import { getHttpRequest, openHttpRequestWithLink, sendHttpRequest, onHttpRequestReadyStateChange } from './httpRequest.service';
import { getTitleFromElement, getIngredientListElement, getIngredientList } from './dom.service';
import { ifNot } from '../utils/common.utils';


function createIngredient(recipe) {
    return function makeObject(item) {
        const { href: recipeLink, title: recipeTitle } = recipe;
        const { textContent: ingredient } = item;
    
        return { recipeLink, ingredient, recipeTitle };
    };
}

function normalizeIngredientsList(props) {
    const { ingredientList, recipe } = props;
    return {
        ...props,
        ingredients: ingredientList.map(createIngredient(recipe)),
    }
}

const handleIngredientsList = cond([
    [ propSatisfies(isNil, 'error'), normalizeIngredientsList ],
    [ ifNot, identity ],
]);

const getIngredientsFromDom = pipe(
    getIngredientListElement,
    getIngredientList,
    handleIngredientsList,
);

export function createIngredientsObject(props) {
    const { linkElement, recipe } = props;
    const allElements = [...linkElement.getElementsByTagName("*")];
    
    return {
        ...props,
        ...getIngredientsFromDom({ allElements, recipe }),
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
