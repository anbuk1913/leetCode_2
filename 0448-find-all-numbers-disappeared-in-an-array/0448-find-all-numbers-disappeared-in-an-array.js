/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=>a-b)
    let max = 0
    if(nums.length<nums[nums.length-1]){
        max = nums[nums.length-1]
    } else {
        max = nums.length
    }
    let uni = [...new Set(nums)]
    let ans = []
    for(let i=1;i<=max;i++){
        if(uni[i-ans.length-1] != i){
            ans.push(i)
        }
    }
    return ans
};