/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let min1 = Infinity
    let min2 = Infinity
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    for(let i of nums){
        if(min1>i){
            min2 = min1
            min1 = i
        }
        else if(min2>i){
            min2 = i
        }
        if(max1<i){
            max3 = max2
            max2 = max1
            max1 = i
        }
        else if(max2<i){
            max3 = max2
            max2 = i
        }
        else if(max3<i){
            max3 = i
        }
    }
    console.log(min1,min2,max1,max2,max3)
    if(min1*min2*max1>max1*max2*max3){
        return min1*min2*max1
    } else {
        return max1*max2*max3
    }
};