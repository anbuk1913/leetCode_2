/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    t=t.split("")
    let j=0
    for(let i=0;i<s.length;i++){
        let tem = true
        for(;j<t.length;j++){
            if(s[i]==t[j]){
                tem = false
                t.splice(j,1)
                break
            }
        }
        if(tem){
            return false
        }
    }
    return true
};