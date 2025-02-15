/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b)
    let ans = 1
    let t = nums.length-1
    for(let i=2;i<=nums[0];i++){
        if(nums[0]%i==0 && nums[t]%i==0){
            ans = i
        }
    }
    return ans
};