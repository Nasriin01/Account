import React, { useState } from "react";
import "./form.css";

const Account = (props)=> {
  const [titleEntered, setTitle] = useState("");
  const HandleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const [balance, setBalance] = useState([]);

  const HandleAdd = (e) => {
    e.preventDefault();

    const balance = {
      amount: "",
      currency: "",
    };

    setBalance((prev) => [...prev, balance]);
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setBalance((prev) => {
      return prev.map((item, i) => {
        if (i !== index) return item;
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

  const handleRemove = (e, index) => {
    e.preventDefault();

    setBalance((prev) => prev.filter((item) => item !== prev[index]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const accountData = {
      title: titleEntered,
      balance: balance,
    };
    setTitle("");
    setBalance([
      {
        amount: "hh",
        currency: "",
      },
    ]);

    props.onSaveAccountData(accountData);
    event.target.reset();
  };

  return (
    <div>
      {/* {JSON.stringify(balance)}
      {JSON.stringify(title)} */}

      <form onSubmit={handleSubmit}>
        <div className="hidden">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={HandleTitleChange}
          />
        </div>

        {balance.map((item, index) => (
          <div className="row" key={`item-${index}`}>
            <div className="hidden">
              <input
                type="text"
                name="amount"
                placeholder="amount"
                value={item.Platform}
                onChange={(e) => onChange(index, e)}
              />
            </div>

            <div className="hidden">
              <input
                type="text"
                name="currency"
                placeholder="currency"
                value={item.Platform}
                onChange={(e) => onChange(index, e)}
              />
            </div>

            <button onClick={(e) => handleRemove(e, index)}>X</button>
          </div>
        ))}

        <button onClick={HandleAdd} className="hidden">
          Add Balance
        </button>

    
      </form>
    </div>
  );
}



export default Account;