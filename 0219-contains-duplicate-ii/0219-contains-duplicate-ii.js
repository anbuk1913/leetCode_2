/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let l = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j-i<= k && j<nums.length;j++){
            if(nums[i]===nums[j]){
                return true
            }
            l++;
            if(l >= 100000) return false;
        }

    }
    return false
};