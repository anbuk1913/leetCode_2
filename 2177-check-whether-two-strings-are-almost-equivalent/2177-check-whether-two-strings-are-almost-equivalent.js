/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let t=word1+word2
    let arr=[]
    for(let i=0;i<t.length;i++){
        if(!arr.includes(t[i])){
            let count1=0
            for(let j=0;j<word1.length;j++){
                if(t[i]==word1[j])count1++
            }
            let count2=0
            for(let j=0;j<word2.length;j++){
                if(t[i]==word2[j])count2++
            }
            if(count1<count2){
                if(count2-count1>3)return false
            } else {
                if(count1-count2>3)return false
            }
            arr.push(word1[i])
        }
    }
    return true
};