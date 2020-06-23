import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'
import { Transac } from './Transac';


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    
    
    return (
        <div>
        <h2>History</h2>
        <hr/>
        <ul className="transaction">
            {transactions.map((transaction,id) => ( <Transac key={id} transaction={transaction}/>
         
                ))}
            
        </ul>

        </div>
    )
}
