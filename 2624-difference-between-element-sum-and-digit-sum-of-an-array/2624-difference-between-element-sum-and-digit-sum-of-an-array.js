/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let num1 = 0
    let nums2 = 0
    for(let i=0;i<nums.length;i++){
        num1+=nums[i]
        let t = String(nums[i])
        let res = 0
        for(let j=0;j<t.length;j++){
            res+=Number(t[j])
        }
        nums2+=res
    }
    if(num1<nums2){
        return nums2-num1
    } else {
        return num1-nums2
    }
};