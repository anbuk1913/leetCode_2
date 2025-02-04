/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i++){
        let t = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = t
        i++
    }
    return nums
};