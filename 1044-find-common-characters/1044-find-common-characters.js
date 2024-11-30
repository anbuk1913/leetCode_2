/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let arr=[]
    for(let i=0;i<words[0].length;i++){
        let tem=1
        for(let x=i+1;x<words[0].length;x++){
            if(words[0][i]===words[0][x]){
                tem++
            }
        }
        let min=tem
        for(let j=1;j<words.length;j++){
            let count=0
            for(let k=0;k<words[j].length;k++){
                if(words[0][i]==words[j][k])count++
            }
            if(count<min){
                min=count
            }
        }
        if(arr.join().includes(words[0][i]))continue
        for(let j=0;j<min;j++)arr.push(words[0][i])
    }
    return arr
};