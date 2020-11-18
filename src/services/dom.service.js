import { pipe, cond, isNil, always, both, propEq, propOr, propSatisfies } from 'ramda';
import { takeFirst, isTrue, ifNot, isFalse } from '../utils/common.utils';


function isIngredientWordInElement({ textContent }) {
    const lowerTextContent = textContent.toLowerCase();
    return lowerTextContent.indexOf('ingredient') !== -1;
}

function isIngredientWordInPreviousElement({ previousTextContent }) {
    return isIngredientWordInElement({ textContent: previousTextContent });
}

const isUnorderList = propEq('tagName', 'UL');
const isOrderList = propEq('tagName', 'OL');

const isCurrentElementAList = cond([
    [isUnorderList, isTrue],
    [isOrderList, isTrue],
    [ifNot, isFalse],
]);

const findCorrectListElement = both(
    isIngredientWordInPreviousElement,
    isCurrentElementAList,
)

function isPreviousSiblingElementNil({ previousElementSibling }) { 
    return isNil(previousElementSibling);
}

function getTexContentFromPreviousElement({ previousElementSibling }) {
    return previousElementSibling.textContent;
};

const getPreviousTextContent = cond([
    [ isPreviousSiblingElementNil, always('') ],
    [ ifNot, getTexContentFromPreviousElement],
]);
 
function handleCurrentAndPreviousElement(props) {
    const { previousElementSibling, tagName } = props;
    const previousTextContent = getPreviousTextContent({ previousElementSibling });
    return { previousTextContent, tagName };
}

const findIngredientsListElement = pipe(
    handleCurrentAndPreviousElement,
    findCorrectListElement,
);

export function getIngredientsListElement(props) {
    const { allElements } = props;
    const listOfIngredients = allElements.find(findIngredientsListElement);
    return { ...props, listOfIngredients }
}


export function createIngredientsList(props) {
    const { listOfIngredients } = props;
    const ingredientListItemElementsArray = [...listOfIngredients.getElementsByTagName('LI')];

    return {
        ...props,
        ingredientListItemElementsArray,
        error: null,
    };
}

export function createIngredientsError(props) {
    return {
        ...props,
        ingredientListItemElementsArray: [],
        error: new Error('Ingredients not found'),
    }
}

export const getIngredientsList = cond([
    [ propSatisfies(isNil, 'listOfIngredients'), createIngredientsError],
    [ ifNot, createIngredientsList ],
]);

function getAllH1FromElement({ linkElement }) {
    return linkElement.getElementsByTagName('h1');
}

const defaultTitle = 'Custom Recipe';
const getTitleFromTextContent = propOr(defaultTitle, 'textContent');

export const getTitleFromElement = pipe(
    getAllH1FromElement,
    takeFirst,
    getTitleFromTextContent,
);

export function addBodyStylesForModalInDom() {
    document.body.style.overflow = 'hidden';
};
export function restoreBodyStylesInDom() {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'unset';
};
