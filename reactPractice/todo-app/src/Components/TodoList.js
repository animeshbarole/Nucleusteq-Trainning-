
const ToDoList = () => {

function handleAddButton()
{  

    
    var taskInput  =  document.getElementById("taskInput").value;

      if (taskInput.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    
     var listItem =  document.createElement("li")
     listItem.textContent = taskInput

     var tasksList = document.getElementById("tasks");

     tasksList.appendChild(listItem);

     var tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
     tasks.push(taskInput);
     localStorage.setItem("tasks",JSON.stringify(tasks));

     document.getElementById("taskInput").value = "";


      
}


window.onload = function() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
      tasks = JSON.parse(tasks);
      var tasksList = document.getElementById("tasks");
      tasks.forEach(function(task) {
          var listItem = document.createElement("li");
          listItem.textContent = task;
          tasksList.appendChild(listItem);
      });
  }
};

  return (

    <>
 
       
     <div className = "container">
     

         <div className ="header">
            
            <span>Todo List </span>
            
                         
         </div>

         <div className = "lists">
          
       
              <div className = "list" >
               <input 
               id = "taskInput"
               type="text" 
               placeholder="Add Tasks"
               
                />
               <button onClick ={handleAddButton}>Add Task</button>
                
              </div>

              <div>
                  <ul id ="tasks">
                     
                    
                     
                  </ul>
              </div>              
        
          </div>

    

       </div>  
    </>
  )
}

export default ToDoList;