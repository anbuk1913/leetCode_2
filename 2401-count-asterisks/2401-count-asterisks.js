/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count=0
    let t=0
    for(let i=0;i<s.length;i++){
        if(t%2==0){
            if(s[i]==='*')count++
        }
        if(s[i]==='|')t++
    }
    return count
};