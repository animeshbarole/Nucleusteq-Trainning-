


const arr = [];
function printFizzBuzz()
{
   
    for(let i =1;i<=50;i++)
    {
        if(i%3==0 && i%5==0)
        {
            arr.push("Fizz Buzz");
        }
        else if(i%5==0)
        {
            arr.push("Buzz");
        }
        else if(i%3==0)
        {
            arr.push("Fizz");
        }
        else{
           arr.push(i);
        }


    }

}

printFizzBuzz();
console.log(arr);