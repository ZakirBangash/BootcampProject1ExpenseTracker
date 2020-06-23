import React,{useContext,useState} from 'react'
import {GlobalContext} from './GlobalState'

export const Transaction = () => {
    let [text, settext] = useState('');
    let [Amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    

    // console.log(addTransaction)
    const oSubmit = e => {
            e.preventDefault();
            
            Amount=Number(Amount)
            let id = Math.floor(Math.random ()* 33383838);
            console.log(id)  ;       
            addTransaction({
                Amount: Amount,
                text: text,
                id: id
            })
    }

    return (
        <div className="transaction_container">
            <h2>Add new Transaction</h2>
            <hr/>
            <form  className="transaction-form" onSubmit={oSubmit}>
                <label>Enter Description
                <input type="text"  onChange={e => settext(e.target.value)} placeholder="Enter Desc..." required/>
                </label><br/>

                <label>Enter Amount
                <input type="number"   onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" required/>
                </label><br/>

                <input className="btn" type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}

