
import FormAcount from "./formAcount";
import "./form.css";

const newAccount = (props) => {
  const saveHandleAccountData = (enteredAccountData) => {
    const accountData = {
      ...enteredAccountData,
      id: Math.random().toString(),
    };
    console.log(accountData);

    props.onAddAccount(accountData);
  };

  return (
    <div>
      < FormAcount
      onSaveAccountData={saveHandleAccountData} />
    </div>
  );
}

export default NewAccount;
