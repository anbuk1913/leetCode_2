/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    if(nums.length==1)return nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i] == nums[i-1]){
            i+=2
        } else {
            return nums[i-1]
        }
    }
    return nums[nums.length-1]
};