/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length==1)return true
    arr.sort((a,b)=>a-b)
    let t=arr[1]-arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]!=t){
            return false
        }
    }
    return true
};