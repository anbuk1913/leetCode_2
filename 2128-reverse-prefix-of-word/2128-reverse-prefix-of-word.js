/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let i
    for(i=0;i<word.length;i++){
        if(word[i]==ch)break
    }
    if(i==word.length)return word
    let count = i
    let ans = ''
    for(i;i>=0;i--){
        ans+=word[i]
    }
    for(count+=1;count<word.length;count++)ans+=word[count]
    return ans
};