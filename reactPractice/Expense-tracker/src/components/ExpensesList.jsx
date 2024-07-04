import { useState } from "react";

const ExpensesList = ({expenses,deleteExpense}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleDelete = (id) => {
    deleteExpense(id);
    setFilteredExpenses(filteredExpenses.filter((expense) => expense.id !== id));
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setFilteredExpenses(
        expenses.filter((expense) =>
          expense.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="ExpenseListDiv">
      <div className="ExpenseBorder">
        <div className="Expenseheading">
          <h4>List of Expenses</h4>
        </div>
        <div className="searchExpense">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search Expenses"
          />
        </div>
        <div className="expenseList">
          {filteredExpenses.length===0 ?(
            <p>No Expenses Found </p>
          ):(
          <ul>
            {filteredExpenses.map((expense) => (
              <li 
              key={expense.id} 
              className="expenseItem"
              style={{
                borderColor: expense.type === "Income" ? "lightgreen" : "lightcoral",
              }}>
                {expense.name} - {expense.amount}
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(expense.id)}
                >
                  &#x1F5D1; {/* Unicode for delete/trash icon */}
                </button>
              </li>
            ))}
          </ul>
         )} 
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
