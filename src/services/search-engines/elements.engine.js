import { always, both, cond, isNil, pipe } from "ramda";
import { getTextContentProp, ifNot, isCurrentElementAList } from "../../utils/common.utils";
import { isIngredientWordInElement } from "../dom.service";


function isIngredientWordInPreviousElement({ previousTextContent }) {
    return isIngredientWordInElement({ textContent: previousTextContent });
};


const isIngredientsList = both(
    isIngredientWordInPreviousElement,
    isCurrentElementAList,
);


const getElementTextContent = cond([
    [ isNil, always('') ],
    [ ifNot, getTextContentProp],
]);


function handleCurrentAndPreviousElement({ previousElementSibling, tagName }) {
    const previousTextContent = getElementTextContent(previousElementSibling);
    return { previousTextContent, tagName };
};


const findListOfIngredients = pipe(
    handleCurrentAndPreviousElement,
    isIngredientsList,
);


export function findIngredientsListFromElements({ elemenstArray }) {
    return elemenstArray.find(findListOfIngredients);
};
