import './style/style.css'

import Header from './components/Header'
import Add from './components/Add'
import ExpensesList from './components/ExpensesList'
import Expenses from './components/Expenses'
import { useState } from 'react'
function App() {

  const [showAdd, setShowAdd] = useState(false);
  const [showExpenses, setShowExpenses]= useState(true);

  const toggleAddComponent = () => {
    setShowAdd(!showAdd);
    setShowExpenses(!showExpenses);
  };

  

  return (
    <>
     <div className='App'>
         <Header onButtonClick={toggleAddComponent}/>
         {showExpenses && <Expenses />}
         {showAdd && <Add />}
         <ExpensesList/> 
      </div>  
    </>
  )
}

export default App
