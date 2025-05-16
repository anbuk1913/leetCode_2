/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let tar=original
    let fou=true;
    while(fou){
        fou=false
    for(let i=0;i<nums.length;i++){

            if(tar==nums[i]){
                tar*=2
                fou=true;
                break;
            }
    }
        }
    
    return tar
};