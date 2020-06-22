export const ADD_MODAL = 'ADD_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function addModalToQueue(modalData) {
    const {
        modalName,
        data = {},
    } = modalData;
    return {
        type: ADD_MODAL,
        payload: {
            modalName: modalName,
            modalProps: data,
        },
    };
}

export function removeModalFromQueue() {
    return { type: CLOSE_MODAL };
}
