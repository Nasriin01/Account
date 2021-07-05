/* eslint-disable no-unused-vars */

import  './form.css';
import  Formlist from "./formlist";

const Account =(props)=> {
  const items = props;
  console.log(props);

  return (
    <div className="grid_items">
      {props.items.map((account) => (
        <div className="items">
          <Formlist
            balance={account.balance}
            amount={account.amount}
            currency={account.currency}
            title={account.title}
            note={account.note}
          />
        </div>
      ))}
    </div>
  );
}

export default Account;