import { head, T, F, propSatisfies, isNil, propEq, cond, propOr, prop } from "ramda";


export function takeFirst(list) { return head(list) };


export const ifNot = T;
export const isTrue = T;
export const isFalse = F;


export function isOneElement(list) {
    return list.length === 1;
};


export const isSuccess = propSatisfies(isNil, 'error');


const isUnorderList = propEq('tagName', 'UL');


const isOrderList = propEq('tagName', 'OL');


export const isCurrentElementAList = cond([
    [isUnorderList, isTrue],
    [isOrderList, isTrue],
    [ifNot, isFalse],
]);


export function getPropOrDefault(propName, defaultState) {
    return propOr(defaultState, propName);
};


export const getTextContentProp = prop('textContent');
