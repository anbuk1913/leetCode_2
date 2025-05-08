/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let arr = []
    let ans = 0
    if(words1.length<words2.length){
        for(let i=0;i<words1.length;i++){
            if(!arr.includes(words1[i])&& !words1.includes(words1[i],i+1)){
                let count = 0
                for(let j=0;j<words2.length;j++){
                    if(words1[i]==words2[j])count++
                    if(count>1)break
                }
                if(count==1)ans++
            }
            arr.push(words1[i])
        }
    } else {
        for(let i=0;i<words2.length;i++){
            if(!arr.includes(words2[i])&& !words2.includes(words2[i],i+1)){
                let count = 0
                for(let j=0;j<words1.length;j++){
                    if(words2[i]==words1[j])count++
                    if(count>1)break
                }
                if(count==1)ans++
            }
            arr.push(words2[i])
        }
    }
    return ans
};