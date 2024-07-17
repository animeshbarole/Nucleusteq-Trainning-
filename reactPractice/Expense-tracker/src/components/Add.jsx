import { useState } from "react";

const Add = ({ addExpense ,hideAddForm}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Expense");

  


  const handleSubmit = (event) => {
    event.preventDefault();
     
    if(name==""||amount==0)
    {
      return alert("Please Enter the Details ");
    }

    addExpense(name, amount ,type);
    setName("");
    setAmount(0);
    hideAddForm();
  };

 

  return (
    <div className="ExpensesContainer">
      <div className="AddExpenses">
        <h3>Add New Transaction</h3>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
           
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Transaction" 
            />
            <span>Amount :</span>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Enter amount (numbers only)"
            />
            <div className="submit-div">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
