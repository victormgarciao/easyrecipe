import { pipe, cond, propSatisfies, isNil, identity } from 'ramda';
import { getHttpRequest, openHttpRequestWithLink, sendHttpRequest, onHttpRequestReadyStateChange } from './httpRequest.service';
import { getTitleFromElement, getIngredientsListElement, getIngredientsList } from './dom.service';
import { ifNot } from '../utils/common.utils';


function createIngredientFromElement(element) {
    const { textContent: ingredient } = element;
    return { ingredient };
}

function formatIngredientsList(props) {
    const { ingredientListItemElementsArray } = props;
    return {
        ...props,
        ingredientsList: ingredientListItemElementsArray.map(createIngredientFromElement),
    }
}

const handleIngredientsList = cond([
    [ propSatisfies(isNil, 'error'), formatIngredientsList ],
    [ ifNot, identity ],
]);

const getIngredientsFromDom = pipe(
    getIngredientsListElement,
    getIngredientsList,
    handleIngredientsList,
);

function createIngredientsObject(props) {
    const { linkElement, recipe } = props;
    const allElements = [...linkElement.getElementsByTagName("*")];
    
    return {
        ...props,
        ...getIngredientsFromDom({ allElements, recipe }),
    };
}

export function createRecipeObject(props) {
    const { linkElement, link } = props;
    const { ingredientsList } = createIngredientsObject(props);
    return {
        ...props,
        recipe: {
            href: link,
            title: getTitleFromElement({ linkElement }),
            ingredientsList,
        },
    };
}

export const getIngredientsAndRecipeFromLink = pipe(
    getHttpRequest,
    openHttpRequestWithLink,
    sendHttpRequest,
    onHttpRequestReadyStateChange,
);
