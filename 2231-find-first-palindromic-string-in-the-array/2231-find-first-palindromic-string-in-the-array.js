/**
 * @param {string[]} words
 * @return {string}
 */

function isPalindrome(word){
    for(let i=0,j=word.length-1;i<word.length/2;i++,j--){
        if(word[i]!==word[j]){
            return false
        }
    }
    return true
}

var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        if(isPalindrome(words[i])){
            return words[i]
        }
    }
    return ""
};