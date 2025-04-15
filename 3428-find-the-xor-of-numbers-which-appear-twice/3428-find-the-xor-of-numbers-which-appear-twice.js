/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let ans = []
    for(let i=0;i<nums.length;i++){
        let count = 1
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                count++
            }
        }
        if(count==2 && !ans.includes(nums[i])){
            ans.push(nums[i])
        }
    }
    let res
    if(ans.length!=0){
        res = ans[0]
    } else {
        res = 0
    }
    
    for(let i=1;i<ans.length;i++){
        res = res^ans[i]
    }
    return res
};