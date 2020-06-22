import { cond } from 'ramda';
import { ADD_INGREDIENTS } from '../actions/ingredients.actions';
import { isAction, returnState } from './utils/reducers.utils';
import { ifNot } from '../utils/common.utils';
import { addIngredientsToStore } from './sideEffects/ingredients.sideeffects';

 
export const ingredientsReducer = cond([
    [isAction(ADD_INGREDIENTS), addIngredientsToStore],
    [ifNot, returnState],
]);
