import { takeFirst } from "../../utils/common.utils";


export function isAction(actionName) {
    return function isAnAction(...args) {
        const [,action] = args;
        const { type } = action;
        return type === actionName;
    };
}

export function returnState (...args) {
    const state = takeFirst(args); 
    return state;
};
