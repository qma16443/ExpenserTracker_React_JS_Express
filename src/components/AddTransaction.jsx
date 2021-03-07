import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { addTransaction } from '../services/services';
import { incomeCategories, expenseCategories } from '../constants/categories.js';
import "./style/style.css";

//This is the function to add transactions
export const AddTransaction = () => {
  //update all the states
  const [category,setCategory]=useState('');
  const [amount, setAmount] = useState(0);
  const [type,setType] = useState('');
  const [date,setDate] = useState();
  const [text, setText] = useState('');

  const { updateTransactions } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      category:category,
      amount:+amount,
      type:type,
      date:date,
      text:text
    }
    addTransaction(newTransaction)
    .then((result) => {
      console.log(result)
      updateTransactions(result)  
      setCategory("");
      setAmount(0);
      setDate('');
      setType('');
      setText('');
    }).catch((err) => {
      console.log(err)     
    });
    ;
  }

  const selectedCategories = type === 'Income' ? incomeCategories : expenseCategories;
  return (
   <div className="newTransaction">
      <h3>Add new transaction</h3>
      <form>
       <div className="form-control">
         <label htmlFor="text">Income/Expense:</label><br/>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
        </div>  
      <div className="form-control">
          <label htmlFor="category">Category: </label><br/>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {selectedCategories.map((c) => <option key={c.type} value={c.type}>{c.type}</option>)}
          </select>
       </div>
       <div className="form-control">
         <label htmlFor="amount">Amount:</label><br/>
         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  />
       </div>
       <div className="form-control">
         <label htmlFor="Date">Date:</label><br/>
         <input type="date" value={date} onChange={(e) => setDate(e.target.value )} />
       </div>
      <div className="form-control">
         <label htmlFor="remark">Remark:</label><br/>
         <textarea type='text' value={text} onChange={(e) => setText(e.target.value)} />
     </div>
        <button className="btn"  onClick={onSubmit} >Add transaction</button>
    </form>
  </div>
  )
}
