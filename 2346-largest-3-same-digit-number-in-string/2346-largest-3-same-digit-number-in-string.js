/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let arr = []
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1] && num[i]==num[i+2] && !arr.includes(num[i])){
            arr.push(num[i])
        }
        if(arr.length==10){
            break
        }
    }
    arr.sort((a,b)=>b-a)
    if(arr.length==0)return ""
    return arr[0]+arr[0]+arr[0]
};