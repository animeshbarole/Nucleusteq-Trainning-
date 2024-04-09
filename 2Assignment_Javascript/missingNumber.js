var missingNumber = function(nums) {
    var ans = 0;

    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }

    for (let i = 0; i <= nums.length+1; i++) {
        ans = ans ^ i;
    }

    return ans;
};

n = 5 ;
const arr = [1, 2, 4, 5];
console.log(missingNumber(arr)); // Output: 3
