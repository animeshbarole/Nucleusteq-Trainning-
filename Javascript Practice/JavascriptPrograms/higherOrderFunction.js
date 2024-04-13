



const radius  =[2,4,5,6];

const area  =function(radius)
{
    return (Math.PI * radius *radius);
}

const circumference  =  function(radius)
{
    return (2 * Math.PI *radius);
}

const diameter = function(radius)
{
    return 2 *radius;
}

const calculate = function(radius,logic)
{
    const outPut =[];
    for(let i =0;i<radius.length;i++)
    {
          outPut.push(logic(radius[i]));
    }

    return outPut;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));