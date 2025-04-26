/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posCount = 0
    let negCount = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0)negCount++
        else if(nums[i]>0)posCount++
    }
    if(posCount>negCount)return posCount
    else return negCount
};