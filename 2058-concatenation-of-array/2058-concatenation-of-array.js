/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    for(let i=0;i<nums.length/2;i++){
        nums.push(nums[i])
    }
    return nums
};