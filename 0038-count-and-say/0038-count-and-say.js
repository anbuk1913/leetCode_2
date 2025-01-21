/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str=''
    let t='1'
    if(n==1)return "1"
    for(let i=0;i<n-1;i++){
        let count=1
        str=""
        for(let j=0;j<t.length;j++){
            if(t[j]==t[j+1]){
                count++
            } else {
                str+=count
                count=1
                str+=t[j]
            }
        }
        t=str
    }
    return str
};