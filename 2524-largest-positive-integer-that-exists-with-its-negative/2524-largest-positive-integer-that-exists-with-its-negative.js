/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  nums.sort((a,b)=>b-a)
  for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
      return -1
    }
    if(nums.includes(-(nums[i]))){
      return nums[i]
    }
  }
  return -1
};