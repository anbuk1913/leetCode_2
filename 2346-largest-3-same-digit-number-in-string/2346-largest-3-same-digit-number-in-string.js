/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let arr=-Infinity
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1] && num[i]==num[i+2] && Number(num[i]>arr)){
            arr=Number(num[i])
        }
    }
    if(arr==-Infinity)return ""
    let ans=String(arr)
    ans+=ans+ans
    return ans
};