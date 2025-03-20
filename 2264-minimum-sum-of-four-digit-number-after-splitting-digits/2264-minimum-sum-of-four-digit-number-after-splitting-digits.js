/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let t = String(num)
    t=t.split("")
    t.sort((a,b)=>a-b)
    ans = Number(t[0]+t[3])+Number(t[1]+t[2])
    return ans
};