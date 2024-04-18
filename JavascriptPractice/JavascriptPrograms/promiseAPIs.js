//1 Promise.all


const p1 = new Promise((resolve,reject)=>{
    
     setTimeout(()=>{
        resolve("p1 Success")
     },5000)
      
});

const p2 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
       
       resolve("p2 resolved");
        
    },1000)
     
});

const p3 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
       resolve("p3 Success")
    },1000)
     
});


Promise.all([p1,p2,p3]).then((values)=>{
     
    console.log(values);
});



Promise.allSettled([p1,p2,p3]).then((values)=>{
    
    console.log(values);
})


Promise.race([p1,p2,p3]).then((values)=>{
  
     console.log(values);
});

Promise.any([p1,p2,p3]).then((values)=>{
  
     console.log(values);
});