import './style/style.css'

import Header from './components/Header'
import Add from './components/Add'
import ExpensesList from './components/ExpensesList'
import Expenses from './components/Expenses'
function App() {
  

  return (
    <>
     <div className='App'>
         <Header/>
         <Expenses/>
         <ExpensesList/> 
      </div>  
    </>
  )
}

export default App
