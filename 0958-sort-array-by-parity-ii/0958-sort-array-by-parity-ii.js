/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(i%2==0 && nums[i]%2){
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]%2==0){
                    let t = nums[i]
                    nums[i] = nums[j]
                    nums[j] = t
                    break
                }
            }
        }
        else if(i%2 && nums[i]%2==0){
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]%2){
                    let t = nums[i]
                    nums[i] = nums[j]
                    nums[j] = t
                    break
                }
            }
        }
    }
    return nums
};