import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'
export const Transac = ({transaction}) => {
    let {DeleteTransaction} = useContext(GlobalContext);

    return (
        
        <li>
            <span>{transaction.text}</span>
    <span>${transaction.Amount}</span>
    <button onClick={()=> DeleteTransaction(transaction.id)} className='btnX'>X</button>
        </li>
        
        
    )
}
