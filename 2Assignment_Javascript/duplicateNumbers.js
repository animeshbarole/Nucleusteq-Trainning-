
function findDuplicates(arr)
{
     
    const map  = new Map();
    const ans =[];
    
    for (let a of arr) {
        if (map.has(a)) {
            map.set(a, map.get(a) + 1);
        } else {
            map.set(a, 1);
        }
    }

    for(const [key,value] of map)
    {
        if(value>1)
        {
            ans.push(key);
        }
    }

    return ans;

}


const arr = [2,2,3,4,5,6,6,7,8,9,9];

console.log(findDuplicates(arr));