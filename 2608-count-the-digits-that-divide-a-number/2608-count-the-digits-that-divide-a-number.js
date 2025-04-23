/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let arr = String(num).split("")
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(!(num%Number(arr[i])))count++
    }
    return count
};