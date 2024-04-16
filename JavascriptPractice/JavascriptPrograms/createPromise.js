
const cart = ["Shoes","shirt","Pants"];


const promise = createOrder(cart);


promise.then(function(orderID){
      
     console.log(orderID);
     
      return orderID;
    }).then(function(orderID){
          return proceedToPayment(orderID);
    }).then(function(paymentInfo){
     
         console.log(paymentInfo);
    })
    .catch(function(err){
    console.log(err.message);
});


function proceedToPayment(orderID){
     
     return new Promise(function(resolve,reject){
         
          resolve("payment Succesfull");
     });
}


function createOrder(cart)
{
     const pr = new Promise(function(resolve,reject){

          
          if(!validateCart(cart))
          {
            const err =  new Error("Promise is Rejected");
            reject(err);
          }

          const orderID = "12345";
    
          if(orderID)
          {
            setTimeout(function(){
                resolve(orderID);
            },5000)
             
          }


     });



     return pr;
} 

function validateCart(cart)
{
    return true;
}