/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let mySet = new Set(nums)
    let arr = [...mySet]
    arr.sort((a,b)=>b-a)
    if(arr.length>2)return arr[2]
    else return arr[0]
};