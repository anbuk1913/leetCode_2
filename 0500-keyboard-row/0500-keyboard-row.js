/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = "QWERTYUIOPpoiuytrewq"
    const row2 = "ASDFGHJKLlkjhgfdsa"
    const row3 = "ZXCVBNMmnbvcxz"
    let ans = []
    for(let i of words){
        let row
        let res = true
        if(row1.includes(i[0])){
            row = 1
        } else if(row2.includes(i[0])){
            row = 2
        } else {
            row = 3
        }
        if(row==1){
            for(let j=1;j<i.length;j++){
                if(!row1.includes(i[j])){
                    res = false
                    break
                }
            }
        } else if(row==2){
            for(let j=1;j<i.length;j++){
                if(!row2.includes(i[j])){
                    res = false
                    break
                }
            }
        } else {
            for(let j=1;j<i.length;j++){
                if(!row3.includes(i[j])){
                    res = false
                    break
                }
            }
        }
        if(res){
            ans.push(i)
        }
    }
    return ans
};