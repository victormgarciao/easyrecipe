import { cond } from 'ramda';
import { ifNot } from '../utils/common.utils';
import { isAction, returnState } from './utils/reducers.utils';
import { ADD_MODAL, CLOSE_MODAL } from '../actions/modal.actions';
import { addModalToStore, removeModalFromStore } from './sideEffects/modal.side-effects';


export const modalReducer = cond([
    [isAction(ADD_MODAL), addModalToStore],
    [isAction(CLOSE_MODAL), removeModalFromStore],
    [ifNot, returnState],
]);
