import React from 'react'

export const Transaction = () => {
    return (
        <div className="transaction_container">
            <h2>Add new Transaction</h2>
            <hr/>
            <form className="transaction-form">
                <label htmlFor="Text">Enter Description</label><br/>
                <input type="text" id="Text" required/><br/>
                <label htmlFor="Amount">Enter Amount</label><br/>
                <input type="number"  id="Amount" required/>
                <br/>
                <input className="btn" type="button" value="Add Transaction"/>
            </form>
        </div>
    )
}

