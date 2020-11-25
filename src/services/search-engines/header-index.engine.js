import { both } from "ramda";
import { isCurrentElementAList } from "../../utils/common.utils";
import { isHeaderElement, isIngredientWordInElement } from "../dom.service";


function getIngredientsTitleIndex(elementsArray) {
    return elementsArray.findIndex(both(isIngredientWordInElement, isHeaderElement));
};


export function findIngredientsListFromIndex(elementsArray) {
    const index = getIngredientsTitleIndex(elementsArray);
    if (index === -1) { return null };

    return elementsArray
        .slice(index + 1)
        .find(isCurrentElementAList);
};
