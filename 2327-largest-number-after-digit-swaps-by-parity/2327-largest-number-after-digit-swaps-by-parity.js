/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    num = String(num).split("")
    let odd = []
    let even = []
    for(let i=0;i<num.length;i++){
        if(Number(num[i])%2){
            odd.push(Number(num[i]))
        } else {
            even.push(Number(num[i]))
        }
    }
    odd.sort((a,b)=>b-a)
    even.sort((a,b)=>b-a)

    let ans = ""

    let j=0,k=0
    for(let i=0;i<num.length;i++){
        if(Number(num[i])%2){
            ans+=odd[j++]
        } else {
            ans+=even[k++]
        }
    }
    return Number(ans)
};