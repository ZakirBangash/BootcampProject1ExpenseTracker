import React ,{useContext}from 'react'
import {GlobalContext} from './GlobalState'

export const Balance = () => {
    const Transaction = useContext(GlobalContext);
    const Amount = Transaction.transactions.map(Transaction => Transaction.amount);
    const income = Amount.filter(item => item > 0).reduce( (acc,item) => (acc+=item),0).toFixed(2);
    let expense = Amount.filter(item => item < 0).reduce( (acc,item)=> (acc+=item),0).toFixed(2);
    let Balance = income - expense*-1;
    Balance = Balance.toFixed(2);
    console.log(Balance)


    return (
        <div>
            <h3>Your Balance <br/> ${Balance}</h3>
        </div>
    )
}
