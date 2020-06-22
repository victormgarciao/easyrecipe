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

export function getIngredientListElement(props) {
    const { allElements } = props;
    const ingredientsListElement = allElements.find(findIngredientsListElement);
    return { ...props, ingredientsListElement }
}


export function createIngredientList(props) {
    const { ingredientsListElement } = props;
    const ingredientList = [...ingredientsListElement.getElementsByTagName('LI')];

    return {
        ...props,
        ingredientList,
        error: null,
    };
}

export function createIngredientsError(props) {
    return {
        ...props,
        ingredientList: [],
        error: new Error('Ingredients not found'),
    }
}

export const getIngredientList = cond([
    [ propSatisfies(isNil, 'ingredientsListElement'), createIngredientsError],
    [ ifNot, createIngredientList ],
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
