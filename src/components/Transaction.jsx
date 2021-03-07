import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {removeTransaction} from '../services/services'
import "./style/style.css";

//This function is to add new transaction to the history list and perform deleting a transaction
export const Transaction = ({ transaction }) => {
  const { updateTransactions } = useContext(GlobalContext);
  const performDeleteTransaction = (id)=>{ 
    removeTransaction(id).then((result) => {
        updateTransactions(result)
    }).catch((err) => {
      console.log(" delete error")
    });
  }
  const sign = transaction.type=== "Income"? '+' : '-';
  return (
  <li className={transaction.type ==="Expense" ? 'minus' : 'plus'}>
      <span className="category">{transaction.category}</span> <span className="text">{transaction.text}</span> <span className="amount">{sign}${Math.abs(transaction.amount)} <span className="date">{transaction.date}</span></span>
      <button onClick={()=>performDeleteTransaction(transaction.id)} className="delete-btn">x</button>
   </li>
  )
}
