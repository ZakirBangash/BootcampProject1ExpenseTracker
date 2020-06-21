import  React, {useReducer,createContext} from 'react'

const initialState = {
        transactions:[
            {id:1,text:"Flower",amount:-20},
            {id:2,text:"Salary",amount:200},
            {id:3,text:"Book",amount:-20},
            {id:4,text:"Camera",amount:150},
        ]
}


// Create Context
export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(

        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}> 
            {children}
        </GlobalContext.Provider>

    );
}

const reducer = (state,action) => {
    switch (action.type) {
      default:
            return state;
            
    }

}