import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'


export const IncomeExpense = () => {
    const Transaction = useContext(GlobalContext)
    let Amount = Transaction.transactions.map(Transaction => Transaction.amount)
    const income = Amount.filter(item => item > 0).reduce( (acc,item) => (acc+=item),0).toFixed(2);
    let expense = Amount.filter(item => item < 0).reduce( (acc,item)=> (acc+=item),0).toFixed(2);
    
    return (
        <div className="Expense">
            <h3 >Income <br/> <span className="incomeC">${income}</span></h3>
    <h3>Expense <br/> <span className="expenseC">${expense}</span></h3>
        </div>
    )
}
