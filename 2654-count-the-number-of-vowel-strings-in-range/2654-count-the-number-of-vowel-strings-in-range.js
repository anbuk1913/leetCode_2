/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let vow = "aeiou"
    let count = 0
    for(let i=left;i<=right;i++){
        if(vow.includes(words[i][0]) && vow.includes(words[i][words[i].length-1])){
            count++
        }
    }
    return count
};