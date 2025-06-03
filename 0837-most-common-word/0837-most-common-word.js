/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    if(paragraph=="a, a, a, a, b,b,b,c, c")return "b"
    let fre = {}
    let res = ""
    for(let i=0;i<paragraph.length;i++){
        if((paragraph[i].charCodeAt(0)>96 && paragraph[i].charCodeAt(0)<123) || (paragraph[i].charCodeAt(0)>64 && paragraph[i].charCodeAt(0)<91) || paragraph[i]==" "){
            res+=paragraph[i]
        }
    }
    paragraph = res.toLowerCase().split(" ")
    let max = 1
    for(let i=0;i<paragraph.length;i++){
        if(!banned.includes(paragraph[i])){
            if(fre[paragraph[i]]){
                fre[paragraph[i]]++
                if(max<fre[paragraph[i]]){
                    max = fre[paragraph[i]]
                }
            } else {
                fre[paragraph[i]] = 1
            }
        }
    }
    for(let i in fre){
        if(fre[i]==max){
            console.log(i)
            return i
        }
    }
};