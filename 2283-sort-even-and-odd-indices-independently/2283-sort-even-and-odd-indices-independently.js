/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let eve = []
    let odd = []

    for(let i=0;i<nums.length;i++){
        if(i%2){
            odd.push(nums[i])
        } else {
            eve.push(nums[i])
        }
    }
    let oddNum = 0
    let eveNum = 0
    eve = eve.sort((a,b)=>a-b)
    odd = odd.sort((a,b)=>b-a)
    for(let i=0;i<nums.length;){
        if(eveNum<eve.length){
            nums[i++] = eve[eveNum++]
        }
        if(oddNum<odd.length){
            nums[i++] = odd[oddNum++]
        }
    }
    return nums
};