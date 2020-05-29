
import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export function StateProvider({ reducer, initialState, children }) {
    const { Provider } = StateContext;
    
    return (
        <Provider value={useReducer(reducer, initialState)}>
            {children}
        </Provider>
    );
};
export const useStateValue = () => useContext(StateContext);