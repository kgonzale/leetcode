/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0;
    let max = 0;
    let maxGlobal = -Infinity;
    
    if(nums.length === 1) {
        return nums[0]
    }
    
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], nums[i] + max)
        if(max > maxGlobal) {
            maxGlobal = max
        }
    }
    
    return maxGlobal;
};