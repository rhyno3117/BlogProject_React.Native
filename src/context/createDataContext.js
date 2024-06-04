// This file is magic, whenever we want to add new resource (images, coments, etc) 
// we create another context file and define reducer, define functions, then return function then call createDataContext then that it it.

import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
};