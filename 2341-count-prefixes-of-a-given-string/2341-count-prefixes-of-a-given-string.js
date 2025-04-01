/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let ans = 0
    for(let i=0;i<s.length;i++){
        let tem = ""
        for(let j=0;j<=i;j++){
            tem+=s[j]
        }
        for(let j=0;j<words.length;j++){
            if(words[j]==tem){
                ans++
            }
        }
    }
    return ans
};