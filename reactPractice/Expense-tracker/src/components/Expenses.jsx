

const Expenses = ({income,expense}) => {
  
 



  return (
    <div className="border-transcation">
    <div className="totalTransaction">
         
         <div className="income-div">
             <div className="text">
              Income
             </div>
             <div className="money">
               
               <span>₹{income}</span>
             </div>
         </div>
         <hr/>
         <div className="expenses-div"> 
               <div className="text">
                 Expense
               </div>
               <div className="money">
                   <span>₹{expense}</span>
               </div>
         </div>

    </div>

    </div>
  )
}

export default Expenses