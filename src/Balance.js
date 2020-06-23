import React ,{useContext} from 'react'
import {GlobalContext} from './GlobalState'

export const Balance = () => {
    // const {transactions} = useContext(GlobalContext);
    // console.log(transactions)
    // const Amount = transactions.map(Transaction => Transaction.Amount);
    // const income = Amount.filter(item => item > 0).reduce( (acc,item) => (acc+=item),0).toFixed(2);
    // let expense = Amount.filter(item => item < 0).reduce( (acc,item)=> (acc+=item),0).toFixed(2);
    // let Balance = income - expense * -1;
    // Balance = Balance.toFixed(2);
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)

    const amounts = transactions.map(transaction => transaction.Amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <div>
            <h3>Your Balance <br/> ${total}</h3>
        </div>
    )
}
