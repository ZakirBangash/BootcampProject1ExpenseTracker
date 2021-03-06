import React, { useReducer, createContext } from 'react'

const transactions = [ ];




// Create Context
export const GlobalContext = createContext(transactions);


export const GlobalProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, transactions);

    function addTransaction(transObj) {
        console.log(transObj.id)
        dispatch(
            {
                type: 'AddTransaction',
                payload: {
                    Amount: transObj.Amount,
                    text: transObj.text,
                    id: transObj.id       
                },
            }
        );

    }


    function DeleteTransaction(id) {
        console.log(id)
        dispatch(
            {
                type: 'DeleteTransaction',
                payload: id
            }
        );
    }

    return (

        <GlobalContext.Provider value={{
            transactions: state,
            addTransaction,
            DeleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>

    );
}

const reducer = ( (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'AddTransaction': {
            return [ ...state,action.payload]
        }
        case 'DeleteTransaction':{
            const newState =state.filter( trans => trans.id !== action.payload)    
            console.log(newState);
            return newState


        }
        
        default:
            return state;

    
}})