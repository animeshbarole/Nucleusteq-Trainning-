import { useState } from "react";



const Add = () => {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  
 
  const handleSubmit = (event)=>{
     
    event.preventDefault();
    console.log(`name"+ ${name} +"amount : "+ ${amount}`);

    setName('');
    setAmount(0);


  };

  return (
    
    <div className="ExpensesContainer">
     <div className="AddExpenses">
      <h3>Add New Transaction</h3>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <span>Name :</span>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="Enter your name"

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
}

export default Add