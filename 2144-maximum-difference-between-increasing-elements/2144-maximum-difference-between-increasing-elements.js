/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(max<nums[j]-nums[i] && nums[i]!=nums[j]){
                max=nums[j]-nums[i]
            }
        }
    }
    return max
};