/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a,b)=>b-a)
    let ans=0
    for(let i=0;i<k;i++){
        ans+=i+nums[0]
    }
    return ans
};