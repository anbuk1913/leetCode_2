/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  nums=nums.filter((ind)=>ind%2==0)
  nums.sort((a,b)=>a-b)
  let lar=-1
  let tem=1
  let count=0
  for(let i=1;i<nums.length;i++){
    
    if(nums[i-1]==nums[i]){
      tem++
    }
    
    else{
      tem=1
    }
    if(count<tem){
      count=tem
      lar=nums[i-1]
    }
  }
  if(nums.length==1)return nums[0]
  return lar
};