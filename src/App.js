import React from 'react';
import { Header } from './Header'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'
import { TransactionList } from './TransactionList'

import { Transaction } from './Transaction';
import './App.css';
import {GlobalProvider} from './GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <div className="expensein"> 
          <IncomeExpense />
        </div>
        <TransactionList />
        <div className="trans">
          <Transaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
