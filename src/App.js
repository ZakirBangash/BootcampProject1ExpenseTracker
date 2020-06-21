import React from 'react';
import {Header} from './Header'
import {Balance} from './Balance'
import {IncomeExpense} from './IncomeExpense'
import {TransactionList} from './TransactionList'

import {Transaction} from  './Transaction';
import './App.css';

function App() {
  return (
   <div className="container">
     <Header/>
      <Balance/>
      <div className="expensein">
      <IncomeExpense />
      </div>
      <TransactionList />
      <Transaction />

   </div>
  );
}

export default App;
