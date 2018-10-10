// BofA interview question, via Glassdoor.
// This question is also on Leetcode
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