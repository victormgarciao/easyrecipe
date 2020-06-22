import { useStateValue } from "../stateManagement/stateManagement";
import { removeModalFromQueue, addModalToQueue } from "../actions/modal.actions";
import { isEmpty, cond } from "ramda";
import { addBodyStylesForModalInDom, restoreBodyStylesInDom } from "../services/dom.service";
import { isOneElement } from "../utils/common.utils";

function useAddModal() {
    const [state, dispatch] = useStateValue();
    return function addModal(modalData) {
        const { modalQueue } = state;
        cond([ [ isEmpty, addBodyStylesForModalInDom ] ])(modalQueue);
        dispatch(addModalToQueue(modalData));
    };
}

function useCloseModal() {
    const [state, dispatch] = useStateValue();
    return function closeModal() {
        const { modalQueue } = state;
        cond([ [ isOneElement, restoreBodyStylesInDom ] ])(modalQueue);
        dispatch(removeModalFromQueue());
    };
}

export function useModalEffects() {
    const addModal = useAddModal();
    const closeModal = useCloseModal();
    return { addModal, closeModal };
}
