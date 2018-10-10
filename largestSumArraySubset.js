// BofA interview question, via Glassdoor.
// This question is also on Leetcode
// Seems like a pretty simple solution that iterates through an array of numbers
// stores the sums in a temp var and when it reaches the end of the array, divides the sum by the value of k.
// The return result is the maximum average, as opposed to the true maximum sum.
// 
// **Note that: If all the numbers were positive, then the whole array is the answer.**
// The first question for this problem should then be whether all the numbers are positive or not.


function findMaxAverage(nums, k) {
    
    var maxNow = 0;
    
    for (var i = 0; i < k; i++) {
        maxNow += nums[i];
    }
    
    var maxUpdate = maxNow;
    
    for (var j = k; j < nums.length; j++) {
        maxNow += (nums[j] - nums[j - k]);
        maxUpdate = Math.max(maxNow, maxUpdate);
    }
    return maxUpdate / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));



