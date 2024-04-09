
// Question is Done using Set . 



function interSectionofArrays(nums1,nums2)
{   
       
    const set = new Set(nums1);
    const res =[];

    for(const a of nums2)
    {
        if(set.has(a))
        {
            res.push(a);
            set.delete(a);
        }
    }

    return res;
     
}


//Different Method with Inbuild function 

function intersectionWithBuiltInFunction(nums1,nums2)
{
    
    const interactions = nums1.filter(element=>nums2.includes(element));

    return interactions;
}

const nums1 = [1,2,3,4,5];
const nums2 = [3,4,5,6,7];

var result  = interSectionofArrays(nums1,nums2);
var res = intersectionWithBuiltInFunction(nums1,nums2);

console.log(res);

