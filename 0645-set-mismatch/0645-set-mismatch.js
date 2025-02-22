/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans=[0]
    nums.sort((a,b)=>a-b)
    let missingNum = 0
    for(let i=1;i<nums.length;i++){
      if(nums[i-1]==nums[i]){
        ans[0]=nums[i]
        nums.splice(i,1)
        break
      }
    }
    for(let i=0;i<nums.length;i++){
        if(i+1 != nums[i]){
            ans.push(i+1)
            break
        }
    }
    if(ans.length==1)ans.push(nums.length+1)
    return ans
};