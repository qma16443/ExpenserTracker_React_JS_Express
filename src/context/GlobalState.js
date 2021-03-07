import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//This is to provide a global context which makes update states globally
// Initial state
const initialState = {
  transactions: []
}
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

function updateTransactions(transactions){
    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: transactions
    })
  }
  return (
    <GlobalContext.Provider value={{
    transactions: state.transactions,
    updateTransactions
  }}>
   {children}
    
  </GlobalContext.Provider>);
}