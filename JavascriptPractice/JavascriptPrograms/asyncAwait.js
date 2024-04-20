

/**const p1   =  new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("Promise1 is Resolved");
    },5000)
     
});

const p2  =  new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        resolve("Promise2 is Resolved");
    },10000)
   
});

 async function handlePromise(){
      
      console.log("Animesh Here");
      const res1 =  await p1;
      console.log(res1);
       
      console.log("Animesh1 heere");
      const res2 =  await p2;
      console.log(res2);

      
 }

handlePromise();
*/

//Real World Example


const API_URL =  "https://jsonplaceholder.typicode.com/posts"

async function handlingURL()
{
          const response = await fetch(API_URL);
          const data = await response.json();

          console.log(data);

}

handlingURL();