import { useState } from "react";
import Add from "./Add";
import ExpensesList from "./ExpensesList";
import  Header from "./Header";
import Expenses from "./Expenses";

const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm,setShowForm] =  useState(false);


  const toggleForm =()=>{
     
    setShowForm(!showForm);
  }

  const addExpense = (name, amount,type) => {
    const newExpense = {
      id: expenses.length + 1,
      name: name,
      type :type,
      amount: `₹${amount}`,
    };

    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    console.log("Updated Expenses:", updatedExpenses);
    
  };

  
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };



  return (
    <div>

      <Header onButtonClick ={toggleForm}/>
      {showForm ? (
        <Add addExpense={addExpense} hideAddForm ={toggleForm}/>
      ):(
       <>
          <Expenses />
          <ExpensesList expenses={expenses} deleteExpense ={deleteExpense} />
       
       </>


      )}
      
      
    
      
    </div>
  );
};

export default ExpensesContainer;
