import React,{useContext,useState} from 'react'

export const Transaction = () => {
    const [text, settext] = useState('');
    const [Amount, setAmount] = useState(0);
    return (
        <div className="transaction_container">
            <h2>Add new Transaction</h2>
            <hr/>
            <form className="transaction-form">
                <label htmlFor="Text">Enter Description</label><br/>
                <input type="text" id="Text" value={text} onChange={e => settext(e.target.value)} placeholder="Enter Desc..." required/><br/>
                <label htmlFor="Amount">Enter Amount</label><br/>
                <input type="number"  id="Amount" value={Amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" required/>
                <br/>
                <input className="btn" type="button" value="Add Transaction"/>
            </form>
        </div>
    )
}

