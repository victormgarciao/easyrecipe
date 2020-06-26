import { useStateValue } from "../stateManagement/stateManagement";
import { addBodyStylesForModal } from "../actions/dom.actions";

function useAddBodyStylesForModal() {
    const [, dispatch] = useStateValue();
    return function dispatchBodyStylesForModal() {
        dispatch(addBodyStylesForModal());
    };
}

function useRestoreBodyStyles() {
    const [, dispatch] = useStateValue();
    return function dispatchRestoreBodyStyles() {
            dispatch(restoreBodyStyles());
    };
}

export function useDomEffects() {
    const addBodyStylesForModal = useAddBodyStylesForModal();
    const restoreBodyStyles = useRestoreBodyStyles();
    return { addBodyStylesForModal, restoreBodyStyles };
}
