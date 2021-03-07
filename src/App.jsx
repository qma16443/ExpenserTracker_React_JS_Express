import React, { useContext, useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { IncomeExpenses } from "./components/IncomeExpenses.jsx";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransaction.jsx";
import Login from "./components/Login.jsx";
import { GlobalProvider } from "./context/GlobalState";
import {Logout} from "./components/Logout.jsx"
import {DetailsCard} from './components/Details.jsx';
import { fetchLoginStatus,fetchLogout } from "./services/services";
import "./App.css";

//The main page
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    fetchLoginStatus().then(() => {
      setLoggedIn(true);
    });
  }, []);

  function processLogIn(username) {
    setLoggedIn(true);
    setUserName(username)
  }
  function processLogOut(){
    setLoggedIn(false)
    setUserName("")
  }

  return (
    <GlobalProvider>
      {!isLoggedIn ? (
        <Login onLogIn={processLogIn} />
      ) : (
        <>
        <Header/>
          <Logout username={username} onLogout={processLogOut}/>
          <IncomeExpenses />
          <div className="container">
            <DetailsCard  title="Income" />
            <DetailsCard  title="Expense" />
            <TransactionList />
            <AddTransaction/>
          </div> 
        </>
      )}
    </GlobalProvider>
  );
}

export default App;
