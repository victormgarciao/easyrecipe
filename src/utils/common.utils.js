import { head, T, F } from "ramda";

export function takeFirst(list) { return head(list) };

export const ifNot = T;
export const isTrue = T;
export const isFalse = F;

export function isOneElement(list) {
    return list.length === 1;
}
