/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ")
    s2 = s2.split(" ")

    for(let i=0;i<s2.length;i++){
        s1.push(s2[i])
    }

    let ans = []
    for(let i=0;i<s1.length;i++){
        let count = 1
        for(let j=0;j<s1.length;j++){
            if(i==j){
                continue
            }
            else if (s1[i]==s1[j]){
                count++
            }
            if(count>1){
                break
            }
        }
        if(count==1){
            ans.push(s1[i])
        }
    }
    return ans
};