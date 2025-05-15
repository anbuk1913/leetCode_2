/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let ans = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            ans.push(0)
            ans.push(0)
        } else {
            ans.push(arr[i])
        }
    }
    for(let i=0;i<arr.length;i++){
        arr[i] = ans[i]
    }
};