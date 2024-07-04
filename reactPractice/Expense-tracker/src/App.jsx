import './style/style.css'

import Header from './components/Header'
import Add from './components/Add'
import ExpensesList from './components/ExpensesList'
import Expenses from './components/Expenses'
import { useState } from 'react'
import ExpensesContainer from './components/ExpensesContainer'
function App() {



  

  return (
    <>
     <div className='App'>
        
        <ExpensesContainer/>
      </div>  
    </>
  )
}

export default App
