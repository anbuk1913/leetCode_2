/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let t = num
    let sum = 0
    if(t<10)return t
    while(t>9){
        sum = 0
        let s = String(t)
        for(let i=0;i<s.length;i++){
            sum+=Number(s[i])
        }
        t = sum
    }
    return sum
};