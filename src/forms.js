/* eslint-disable no-unused-vars */
  
import React, { useState } from "react";


import Header from "./components/header";
import Formitem  from "./formItem";
import Newform from "./newform";
import "./App.css";

const INITIAL_ACCOUNTS = [
  {
    title: "..",
    balance: { amount: 570, currency: "EURO" },
  },
  {
    title: "My Business Account",
    balance: { amount: 600, currency: "EURO" },
    amount: 200,
    currency: "$",
  },
  {
    title: "Personal Safe",
    balance: { amount: 10, currency: "usd" },
    amount: "0",
    currency: "xlm",
  },

  {
    title: "Discretionary funds",
    balance: { amount: 300, currency: "EURT"},
     amount: "0.2299", 
     currency: "USD",
     amount: "673.0", 
     currency: "xlm" ,
    note: "10",
  },
];

const  Account = ()=> {
  const [accounts, setAccount] = useState(INITIAL_ACCOUNTS);

  const addAccountHandler = (account) => {
    setAccount((prevAccounts) => {
      console.log(account);
      return [account, ...prevAccounts];
    });
  };

  // ===============================================
  return (
    <div className="wrap">
      <div className="account_wrapper">
        <div className="clr_btn">
          <div className="one btn"></div>
          <div className="two btn"></div>
          <div className="three btn"></div>
        </div>
        <Header />
        < Newform />
        {console.log(accounts)}
        <Formitem  items={accounts} />
      </div>
    </div>
  );
}


export default Account;