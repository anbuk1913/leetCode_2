/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = String(x).split("").reverse()
    if(rev[rev.length-1]=="-"){
        rev.unshift("-")
        rev.pop()
    }
    let ans = Number(rev.join("")) 
    if(ans>2147483647 || ans<-2147483648){
        return 0
    }
    return ans
};