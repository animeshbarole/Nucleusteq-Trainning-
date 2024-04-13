
const arr =[2,4,5,6,7];

//This is Simpler Code 
const sum = function(arr)
{
    var s =0;
    for(let i =0;i<arr.length;i++)
    {
        s += arr[i];
    }

    return s;
}

console.log(sum(arr));


//Lets do in the map Reduce function .\


const reduceSum  =  arr.reduce(function(acc,curr){
    
     acc = acc + curr;
     return acc;
},0);

console.log(reduceSum);



//2nd Assignment : 

const users = [
    
    { firstName :"animesh",lasName :"barole" , age:32},
    { firstName:"aashutosh",lasName:"barole", age :31},
    { firstName:"shailendra",lasName:"barole",age:18},
];


const outPut = users.reduce(function(acc,curr)
{
    if(curr.age>30)
    {
        acc.push(curr.firstName);
    }

    return acc;
    
},[]);

console.log(outPut);