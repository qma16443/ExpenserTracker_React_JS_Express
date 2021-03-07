const { v4 } = require('uuid');

//initial values
let transactions = [ {id:"1",type:"Income",category:'Business',amount:50,date:'2020-2-1',text:''} , {id:"2",type:"Expense",category:'Food',amount:50,date:'2020-1-1',text:'costco'}, {id:"3",type:"Income",category:'Lottery',amount:20,date:'2020-2-1',text:''}, {id:"4",type:"Income",category:'Gifts',amount:15,date:'2020-5-2',text:'toy'}, {id:"5",type:"Expense",category:'Car',amount:100,date:'2020-6-2',text:'gas'}, {id:"6",type:"Expense",category:'Food',amount:50,date:'2020-1-1',text:''}, {id:"7",type:"Expense",category:'Phone',amount:60,date:'2020-10-11',text:''}, {id:"8",type:"Income",category:'Salary',amount:500,date:'2020-9-1',text:''}, {id:"9",type:"Expense",category:'House',amount:200,date:'2020-11-11',text:'trash'}, {id:"9",type:"Expense",category:'Food',amount:5,date:'2020-5-5',text:''}, {id:"10",type:"Income",category:'Deposites',amount:50,date:'2020-12-5',text:''}]

const addTransaction = (transaction) =>{
    const id = v4();
    const type = transaction.type;
    const amount = transaction.amount;
    const category= transaction.category;
    const date =transaction.date;
    const text =transaction.text;
    const newTransaction = {id, type, amount,category,date,text}
    transactions.push(newTransaction)
}

const removeTransaction = (id) =>{
  const index = transactions.findIndex((transaction)=> transaction.id === id ) 
  transactions.splice(index,1)
  
}

const clearTransactions = () =>{
  transactions.splice(0,transactions.length)
  console.log(transactions)
}

module.exports = {transactions,addTransaction,removeTransaction,clearTransactions}