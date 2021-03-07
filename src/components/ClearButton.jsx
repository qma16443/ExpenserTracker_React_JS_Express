import React from 'react';
import "./style/style.css";


//This function is to provide a clear button 
//to clear all the transaction history
export const ClearButton = ({clearTransactions}) => {
  return (
    <>
      <button  className="cleanbtn" onClick={clearTransactions}>Clear Transactions </button>
    </>
    );
}
 
