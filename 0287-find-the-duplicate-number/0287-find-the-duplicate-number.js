/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const arr = [...new Set(nums)]
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=arr[i])return nums[i]
    }
};