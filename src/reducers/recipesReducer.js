import { cond } from 'ramda';
import { ADD_RECIPE } from '../actions/recipes.actions';
import { ifNot } from '../utils/common.utils';
import { isAction, returnState } from './utils/reducers.utils';
import { addRecipeToStore } from './sideEffects/recipes.sideeffects';


export const recipesReducer = cond([
    [isAction(ADD_RECIPE), addRecipeToStore],
    [ifNot, returnState],
]);
