/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let obj = {}
    for(let i of s){
        if(obj[i]){
            obj[i]++
        } else {
            obj[i] = 1
        }
    }
    let max = 0
    for(let i in obj){
        if(obj[i]>max && obj[i]%2==1){
            max = obj[i]
        }
    }
    let min = Infinity
    for(let i in obj){
        if(obj[i]%2!=1 && min>obj[i]){
            min = obj[i]
        }
    }
    return max-min
};