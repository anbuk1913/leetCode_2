/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let arr=[]
    for(let i of heights)arr.push(i)
    arr.sort((a,b)=>a-b)
    
    let count = 0 
    for(let i=0;i<heights.length;i++){
        if(arr[i]!=heights[i])count++
    }
    return count
};