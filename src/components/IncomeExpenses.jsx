import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


//This finction is to automatically compute the income,expense and balance
export const IncomeExpenses = () => {

  //get the transactions
 const { transactions } = useContext(GlobalContext);

 //get the amount of each income
 const Inamounts = transactions.filter((t) => t.type == "Income").map(transaction => transaction.amount);
 
 //get the amount of each expense
 const Examounts = transactions.filter((t) => t.type == "Expense").map(transaction => transaction.amount);

 //compute the totole amount of income
 const income = Inamounts
    .reduce((acc, item) => (acc += +item), 0).toFixed(2);

//compute the totole amount of income
 const expense = Examounts
    .reduce((acc, item) => (acc += +item), 0).toFixed(2);

//compute the balance
 const total=(income-expense);



  return (
    
    <div className="inc-exp-container">
   <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
      
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
