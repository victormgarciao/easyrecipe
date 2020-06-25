export function addModalToStore(state, action) {
    const nextState = [
        ...state,
        action.payload,
    ];
    return nextState;
};

export function removeModalFromStore(state) {
    const nextState = state;
    nextState.shift();
    return nextState;
};
