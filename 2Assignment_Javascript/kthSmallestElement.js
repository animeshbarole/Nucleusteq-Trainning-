/*
 with the help of priority Queue 
  */

 function kthSmallestElement(arr, k) {
    const maxHeap = [];

    for (let i =0; i <=arr.length; i++) {
        maxHeap.push(arr[i]);
        if (maxHeap.length > k) {
            maxHeap.sort((a, b) => a - b); // Sort in ascending order
            maxHeap.pop();
        }
    }
   
    return maxHeap[maxHeap.length - 1]; // Return the smallest element in the maxHeap
}

 const arr = [1,3,5,7,8,9,20];
 console.log(kthSmallestElement(arr,3));

 


