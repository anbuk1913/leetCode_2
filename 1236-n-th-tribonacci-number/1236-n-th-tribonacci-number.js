/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0,1,1]
    for(let i=3;i<n+1;i++){
        arr.push(arr[i-1] + arr[i-2]+ arr[i-3])
    }
    return arr[n]
};