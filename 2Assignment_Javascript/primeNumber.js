 

function checkPrime(num)
{
    if(num==1)
    {
        return "The Number is Prime";
    }

    for(let i =2;i<=num/2;i++)
    {
          if(num%i==0)
          {
            return "The Number is Prime";
          }
    }

    return "The Number is Non Prime";
}

var x  =checkPrime(20);

console.log(x);