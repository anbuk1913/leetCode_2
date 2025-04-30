/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let vow = ['a','e','i','o','u']
    let count = 0 
    for(let i=0;i<word.length;i++){
        if(!vow.includes(word[i])){
            continue
        }
        for(let j=i;j<word.length;j++){
            if(!vow.includes(word[j])){
                break
            } else {
                let tem = []
                for(let k=i;k<=j;k++){
                    if(vow.includes(word[k]) && !tem.includes(word[k])){
                        tem.push(word[k])
                    }
                }
                if(tem.length == 5){
                    count++
                }
            }
        }
    }
    return count
};