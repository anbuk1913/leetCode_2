/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(String(num).length==1)return num
    let t = String(num)
    let ans =0
    while(t.length!=1){
        ans = 0
        for(let i=0;i<t.length;i++){
            ans+=Number(t[i])
        }
        t=String(ans)
    }
    return ans
};