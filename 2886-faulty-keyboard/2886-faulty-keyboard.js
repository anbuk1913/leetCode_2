/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    s = s.split("")
    let arr = []

    for(let i in s){
        if(s[i]!='i'){
            arr.push(s[i])
        } else {
            arr = arr.reverse()
        }
    }
    return arr.join("")
};