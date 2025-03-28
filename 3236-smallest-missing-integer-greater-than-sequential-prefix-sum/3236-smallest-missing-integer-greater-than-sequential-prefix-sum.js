/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    if(nums.length==1)return nums[0]+1
    let sum = nums[0] 
    for(let i=1;i<nums.length;i++){
        if(nums[i-1] == nums[i]-1){
            sum+=nums[i]
        }
        else {
            for(let j=0;j<nums.length;j++){
                let tem = false
                for(let k=0;k<nums.length;k++){
                    if(sum == nums[k]){
                        tem = true
                    }
                }
                if(tem){
                    sum++
                } else {
                    return sum
                }
            }
            return sum
        }
    }
    return sum
};