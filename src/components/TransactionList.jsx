import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction.jsx';
import {fetchTransactionList} from '../services/services'
import { GlobalContext } from '../context/GlobalState';
import {ClearButton} from './ClearButton'
import {clearTransactions} from '../services/services'
import Dragula from 'react-dragula';
import "./style/style.css";

//This function is to show the history of all the transactions
export const TransactionList = () => {
  const { transactions, updateTransactions } = useContext(GlobalContext);
  useEffect(()=>{
    fetchTransactionList().then((result) => {
      updateTransactions(result)
    }).catch((err) => {
      console.log(err)
    });
  },[])

  //clear history
  const removeTransactions = () =>{
    clearTransactions().then(result=>{
      updateTransactions(result)
    }).catch(err => console.log(err))
  }

  //changing transaction's position by dragging it to new position
  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {removeOnSpill: true };
      Dragula([componentBackingInstance], options);
    }
  }
  return (
    <div className="history"> <h3>History</h3>
      <ul className="list" ref={dragulaDecorator}>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      <div className="clean">
      {transactions.length>0? <ClearButton  clearTransactions={removeTransactions}/>:null}</div>
    </div>
  )
}
