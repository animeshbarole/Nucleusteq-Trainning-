import { useState } from "react";
import Add from "./Add";
import ExpensesList from "./ExpensesList";
import Header from "./Header";
import Expenses from "./Expenses";

const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const showAddForm = () => {
    setShowForm(true);
  };

  const hideAddForm = () => {
    setShowForm(false);
  };

  const addExpense = (name, amount, type) => {
    const newExpense = {
      id: expenses.length + 1,
      name: name,
      type: type,
      amount: amount,
    };

    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    console.log("Updated Expenses:", updatedExpenses);
  };

  const totalIncome = expenses
    .filter(expense => expense.type === "Income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = expenses
    .filter(expense => expense.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalBalance = Math.max(totalIncome - totalExpense, 0);

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <Header onButtonClick={showAddForm} balance={totalBalance} />
      {showForm ? (
        <Add addExpense={addExpense} hideAddForm={hideAddForm} />
      ) : (
        <>
          <Expenses income={totalIncome} expense={totalExpense} />
          <ExpensesList expenses={expenses} deleteExpense={deleteExpense} />
        </>
      )}
    </div>
  );
};

export default ExpensesContainer;