/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj = {}
    let arr = []
    for(let i of nums){
        if(obj[i]){
            obj[i]++
        } else {
            obj[i] = 1
        }
    }
    for(let i in obj){
        if(obj[i]!=2){
            arr.push(Number(i))
        }
    }
    return arr
};